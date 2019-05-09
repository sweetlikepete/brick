

import https from "https";

import express from "express";
import graphqlHTTP from "express-graphql";

import { schema as generateSchema } from "../../../graphql/schema";
import { IScotchGraphQLFieldConfigMap } from "../../../graphql/types";


interface IGraphqlRouterConfig {
    authorized?: (request: express.Request) => boolean;
    endpoint?: string;
    host?: string | undefined;
    // These can legitimately be of any type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutations?: IScotchGraphQLFieldConfigMap<any, any, any>;
    // These can legitimately be of any type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queries?: IScotchGraphQLFieldConfigMap<any, any, any>;
}

interface IGraphqlServerConfig {
    authorized?: (request: express.Request) => boolean;
    graphiql?: boolean;
    // These can legitimately be of any type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutations?: IScotchGraphQLFieldConfigMap<any, any, any>;
    // These can legitimately be of any type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queries?: IScotchGraphQLFieldConfigMap<any, any, any>;
}

interface IJSONResponse {
    // It's expected that this could actually be any value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    status: number | undefined;
}


const postJSON = (
    options: string | https.RequestOptions | URL,
    // It's expected that this could actually be any value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
): Promise<IJSONResponse> => new Promise((resolve, reject): void => {

    const request = https.request(options, (response): void => {

        const output: string[] = [];

        response.setEncoding("utf8");

        response.on("data", (chunk: string): void => {
            output.push(chunk);
        });

        response.on("end", (): void => {

            resolve({
                data: JSON.parse(output.join("")),
                status: response.statusCode
            });

        });

    });

    request.on("error", reject);
    request.write(JSON.stringify(data));
    request.end();

});

const graphqlServer = (config: IGraphqlServerConfig): graphqlHTTP.Middleware => graphqlHTTP((
    request: express.Request,
    response: express.Response
): graphqlHTTP.OptionsResult => {

    const {
        authorized = (authRequest: express.Request): boolean => !authRequest,
        graphiql = false,
        mutations,
        queries
    } = config;

    response.setHeader("Content-Security-Policy", "");

    return {
        context: {
            request,
            response
        },
        graphiql,
        schema: generateSchema({
            authorized: authorized(request),
            mutations,
            queries
        })
    };

});

export const graphqlRouter = (config: IGraphqlRouterConfig = {}): express.Router => {

    const {
        authorized = (request: express.Request): boolean => !request,
        endpoint = "/graphql/",
        host
    } = config;

    const router = express.Router({
        caseSensitive: true,
        strict: true
    });

    router.get(endpoint, graphqlServer({
        authorized,
        graphiql: true
    }));

    if(host){

        router.post(endpoint, async (request, response): Promise<void> => {

            response.setHeader("Content-Security-Policy", "");

            const headers = request.headers;

            delete headers.origin;
            delete headers.host;
            delete headers["content-length"];

            const defaultStatus = 500;

            const {
                data,
                status = defaultStatus
            } = await postJSON({
                headers,
                hostname: host,
                method: "POST",
                path: endpoint,
                port: 443
            }, request.body);

            response.status(status).send(JSON.stringify(data)).end();

        });

    }else{

        router.post(endpoint, graphqlServer({
            authorized
        }));

    }

    return router;

};
