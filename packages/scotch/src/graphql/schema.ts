

import graphql from "graphql";

import types from "./types";


export const schema = function(): graphql.GraphQLSchema{

    return new types.schema({
        query: new types.object({
            fields: {
                hello: {
                    resolve(): string{
                        return "world";
                    },
                    type: types.string
                }
            },
            name: "RootQueryType"
        })
    });

};
