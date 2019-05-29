

/*
 * React specific linting rules for ESLint
 *
 * https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
 */


export default {
    rules: {

        /*
         * Enforces consistent naming for boolean props
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
         */
        "react/boolean-prop-naming": "error",

        /*
         * Forbid "button" element without an explicit "type" attribute
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
         */
        "react/button-has-type": "error",

        /*
         * Prevent extraneous defaultProps on components
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
         */
        "react/default-props-match-prop-types": "error",

        /*
         * Rule enforces consistent usage of destructuring assignment in component
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
         */
        "react/destructuring-assignment": [
            "error",
            "never"
        ],

        /*
         * Prevent missing displayName in a React component definition
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
         */
        "react/display-name": "error",

        /*
         * Forbid certain props on Components
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
         */
        "react/forbid-component-props": "error",

        /*
         * Forbid certain props on DOM Nodes
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
         */
        "react/forbid-dom-props": "error",

        /*
         * Forbid certain elements
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
         */
        "react/forbid-elements": "error",

        /*
         * Forbid foreign propTypes
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
         */
        "react/forbid-foreign-prop-types": "error",

        /*
         * Forbid certain propTypes
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
         */
        "react/forbid-prop-types": "error",

        /*
         * Prevent using this.state inside this.setState
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
         */
        "react/no-access-state-in-setstate": "error",

        /*
         * Prevent using Array index in key props
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
         */
        "react/no-array-index-key": "error",

        /*
         * Prevent passing children as props
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
         */
        "react/no-children-prop": "error",

        /*
         * Prevent usage of dangerous JSX properties
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
         */
        "react/no-danger": "error",

        /*
         * Prevent problem with children and props.dangerouslySetInnerHTML
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
         */
        "react/no-danger-with-children": "error",

        /*
         * Prevent usage of deprecated methods, including component lifecyle methods
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
         */
        "react/no-deprecated": "error",

        /*
         * Prevent usage of setState in componentDidMount
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
         */
        "react/no-did-mount-set-state": "error",

        /*
         * Prevent usage of setState in componentDidUpdate
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
         */
        "react/no-did-update-set-state": "error",

        /*
         * Prevent direct mutation of this.state
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
         */
        "react/no-direct-mutation-state": "error",

        /*
         * Prevent usage of findDOMNode
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
         */
        "react/no-find-dom-node": "error",

        /*
         * Prevent usage of isMounted
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
         */
        "react/no-is-mounted": "error",

        /*
         * Prevent multiple component definition per file
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
         */
        "react/no-multi-comp": "error",

        /*
         * Prevent usage of shouldComponentUpdate when extending React.PureComponent
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
         */
        "react/no-redundant-should-component-update": "error",

        /*
         * Prevent usage of the return value of React.render
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
         */
        "react/no-render-return-value": "error",

        /*
         * Prevent usage of setState
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
         */
        "react/no-set-state": "error",

        /*
         * Prevent using string references in ref attribute.
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
         */
        "react/no-string-refs": "error",

        /*
         * Prevent using this in stateless functional components
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
         */
        "react/no-this-in-sfc": "error",

        /*
         * Prevent common casing typos
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
         */
        "react/no-typos": "error",

        /*
         * Prevent invalid characters from appearing in markup
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
         */
        "react/no-unescaped-entities": "error",

        /*
         * Prevent usage of unknown DOM property (fixable)
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
         */
        "react/no-unknown-property": "error",

        /*
         * Prevent usage of unsafe lifecycle methods
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
         */
        "react/no-unsafe": "error",

        /*
         * Prevent definitions of unused prop types
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
         */
        "react/no-unused-prop-types": "error",

        /*
         * Prevent definitions of unused state properties
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
         */
        "react/no-unused-state": "error",

        /*
         * Prevent usage of setState in componentWillUpdate
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
         */
        "react/no-will-update-set-state": "error",

        /*
         * Enforce ES5 or ES6 class for React Components
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
         */
        "react/prefer-es6-class": "error",

        /*
         * Enforce that props are read-only
         *
         * Off for now because this only works in Flow
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-read-only-props.md
         */
        "react/prefer-read-only-props": "off",

        /*
         * Enforce stateless React Components to be written as a pure function
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
         */
        "react/prefer-stateless-function": [
            "error",
            {
                ignorePureComponents: true
            }
        ],

        /*
         * Prevent missing props validation in a React component definition
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
         */
        "react/prop-types": "error",

        /*
         * Prevent missing React when using JSX
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
         */
        "react/react-in-jsx-scope": "error",

        /*
         * Enforce a defaultProps definition for every prop that is not a required prop
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
         */
        "react/require-default-props": "error",

        /*
         * Enforce React components to have a shouldComponentUpdate method
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
         */
        "react/require-optimization": "error",

        /*
         * Enforce ES5 or ES6 class for returning value in render function
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
         */
        "react/require-render-return": "error",

        /*
         * Prevent extra closing tags for components without children (fixable)
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
         */
        "react/self-closing-comp": "error",

        /*
         * Enforce component methods order (fixable)
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
         */
        "react/sort-comp": "error",

        /*
         * Enforce propTypes declarations alphabetical sorting
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
         */
        "react/sort-prop-types": "error",

        /*
         * This rule will enforce the state initialization style to be either in a constructor or with a class property.
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
         */
        "react/state-in-constructor": "error",

        /*
         * Enforces where React component static properties should be positioned.
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
         */
        "react/static-property-placement": "error",

        /*
         * Enforce style prop value being an object
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
         */
        "react/style-prop-object": "error",

        /*
         * Prevent void DOM elements (e.g. <img />, <br />) from receiving children
         *
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
         */
        "react/void-dom-elements-no-children": "error"

    }
};
