

import {
    GraphQLBoolean,
    GraphQLEnumType,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} from "graphql";
import {
    GraphQLDateTime,
    GraphQLEmail,
    GraphQLURL,
    GraphQLUUID
} from "graphql-custom-types";
import GraphQLJSON from "graphql-type-json";


const graphQLTypes = {
    boolean: GraphQLBoolean,
    datetime: GraphQLDateTime,
    email: GraphQLEmail,
    enum: GraphQLEnumType,
    float: GraphQLFloat,
    int: GraphQLInt,
    json: GraphQLJSON,
    list: GraphQLList,
    nonNull: GraphQLNonNull,
    object: GraphQLObjectType,
    schema: GraphQLSchema,
    string: GraphQLString,
    url: GraphQLURL,
    uuid: GraphQLUUID
};


export {
    graphQLTypes as default
};

