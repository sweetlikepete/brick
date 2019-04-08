

pull out imagemin stuff in brick into @sweetlikepete/imagemin and @sweetlikepete/imagemin-config
add a modernizr step (finish testing it after the client webpack build is done)
finish off the webpack hot and dev loader for client code
add a test harness
add format message harness with https://www.npmjs.com/package/format-message
enable this for translation https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
add a step to the build that extracts format message strings for translation
try using https://www.npmjs.com/package/react-ssr-prepass to resolve suspense calls

after implementing graphql have a look at https://www.npmjs.com/package/eslint-plugin-graphql

add more stylelint plugins through npm search for stylelint-plugin

move postcss plugins out to a postcss config like it says in https://github.com/postcss/postcss
https://www.npmjs.com/package/postcss-discard-comments
https://www.npmjs.com/package/postcss-colormin
https://www.npmjs.com/package/postcss-calc
https://www.npmjs.com/package/postcss-discard-duplicates
https://www.npmjs.com/package/postcss-merge-longhand
https://www.npmjs.com/package/postcss-ordered-values
https://www.npmjs.com/package/postcss-minify-gradients
https://www.npmjs.com/package/postcss-merge-rules
https://www.npmjs.com/package/postcss-reduce-transforms
https://www.npmjs.com/package/postcss-reduce-initial
https://www.npmjs.com/package/postcss-minify-selectors
https://www.npmjs.com/package/postcss-minify-params
https://www.npmjs.com/package/postcss-font-smoothing
https://www.npmjs.com/package/postcss-font-variant
https://www.npmjs.com/package/postcss-image-set-polyfill
https://www.npmjs.com/package/postcss-discard-empty
https://www.npmjs.com/package/postcss-minify-font-values
https://www.npmjs.com/package/postcss-normalize-url
https://www.npmjs.com/package/postcss-normalize-positions
https://www.npmjs.com/package/postcss-normalize-whitespace
https://www.npmjs.com/package/postcss-clean
https://www.npmjs.com/package/postcss-preset-env

make logging a separate package in brick
make brick into it's own npm namespace @brick and move brick into newsteam

create a cli
    brick build
        - run clean
        - run lint
        - run webpack
    brick clean
        - clean caches and build directory
    brick local
        - alias to start
    brick start
        - start memcache
        - start local server
        - start datastore
        - start lint watch
        - start webpack watch
    brick deploy
        - run build
        - run deploy with tag option
    brick promote
        - run promote with tag selector
    brick lint
        - run a lint of
            - js
            - es
            - css
            - scss
    brick setup
        - symlinks in the .vscode folder from node_modules/brick/.vscode

create the application
    - use react native for the --platform=mobile
    - use electron for the --platform=desktop
    - use google firestore
    - use graphql
    - use typescript
    - use react suspence/lazy
    - use webpack-hot-middleware
    - use webpack-dev-middleware
    - use react-intl
    - use extract-react-intl
    - use ssr
    - use https://github.com/jamiebuilds/react-loadable


create a babel preset
create a eslint preset
create a stylelint preset

build it in typescript

make it an npm module

make a script to publish to npm