

import graphql from "graphql";


// This could be a legitimate any type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ScotchGraphQLFieldConfig<TSource, TContext, TArgs = { [argName: string]: any }> {
    args?: graphql.GraphQLFieldConfigArgumentMap;
    astNode?: null | undefined | graphql.FieldDefinitionNode;
    description?: null | undefined | string;
    deprecationReason?: null | undefined | string;
    public?: null | undefined | boolean;
    resolve?: graphql.GraphQLFieldResolver<TSource, TContext, TArgs>;
    subscribe?: graphql.GraphQLFieldResolver<TSource, TContext, TArgs>;
    type: graphql.GraphQLOutputType;
}

// This could be a legitimate any type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ScotchGraphQLFieldConfigMap<TSource, TContext, TArgs = { [key: string]: any }>{
    [key: string]: ScotchGraphQLFieldConfig<TSource, TContext, TArgs>;
}

