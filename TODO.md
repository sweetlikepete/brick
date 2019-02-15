
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

create a babel preset
create a eslint preset
create a stylelint preset

build it in typescript

make it an npm module

make a script to publish to npm