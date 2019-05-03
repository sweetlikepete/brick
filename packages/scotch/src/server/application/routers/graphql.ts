

import https from "https";

import express from "express";
import graphqlHTTP from "express-graphql";

import { schema as generateSchema } from "../../../graphql/schema";


interface IGraphqlRouterConfig {
    endpoint?: string;
    host?: string | undefined;
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


export const graphqlRouter = (config: IGraphqlRouterConfig = {}): express.Router => {

    const {
        endpoint = "/graphql/",
        host
    } = config;

    const router = express.Router({
        caseSensitive: true,
        strict: true
    });

    const gqlServer = (
        request: express.Request,
        response: express.Response,
        graphiql = false
    ): graphqlHTTP.Options => {

        response.setHeader("Content-Security-Policy", "");

        return {
            context: {
                request,
                response
            },
            graphiql,
            schema: generateSchema()
        };

    };

    router.get(
        endpoint,
        (
            request: express.Request,
            response: express.Response
        ): graphqlHTTP.Middleware => graphqlHTTP(gqlServer(request, response, true))
    );

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

        router.post(
            endpoint,
            (
                request: express.Request,
                response: express.Response
            ): graphqlHTTP.Middleware => graphqlHTTP(gqlServer(request, response))
        );

    }

    return router;

};
