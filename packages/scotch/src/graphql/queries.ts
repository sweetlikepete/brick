

import { GraphQLString } from "graphql";
import { stripIndent } from "common-tags";


export default {

    default: {

        description: stripIndent`
            The default query. This query will only exist if no queries have been
            configured in your @tamland/brick server configuration.
        `,

        name: "default",

        public: true,

        resolve(): string{

            return "I love lamp!";

        },

        type: GraphQLString

    }

};
