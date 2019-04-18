

figure out why hmr doesn't work in production mode

move hmr to watch instead of development in the config

finish off the webpack hot and dev loader for client code

add a modernizr step (finish testing it after the client webpack build is done)
add a test harness
add format message harness with https://www.npmjs.com/package/format-message
enable this for translation https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
add a step to the build that extracts format message strings for translation
try using https://www.npmjs.com/package/react-ssr-prepass to resolve suspense calls

after implementing graphql have a look at https://www.npmjs.com/package/eslint-plugin-graphql

make brick into it's own npm namespace @tamland and move tamland into newsteam git repo

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