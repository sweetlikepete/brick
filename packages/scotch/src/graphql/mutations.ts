

import { GraphQLString } from "graphql";
import { stripIndent } from "common-tags";


export default {

    default: {

        description: stripIndent`
            The default mutation. This query will only exist if no queries have been
            configured in your @tamland/brick server configuration.
        `,

        name: "defaultMutation",

        public: true,

        resolve(): string{

            return "I love lamp!";

        },

        type: GraphQLString

    }

};
