## Web dev environment

## Tools to install
- See library-dev
- E2E: [cypress] or [nightwatch]
- webpack
- web app framework (f.ex Vue2 or Quasar)

We need to extend our regular scripts entry with e2e tests and use webpack for bundling.

```json
"scripts": {
    "test:e2e": "ava \"**/*.e2e.js\" --require ./test/helpers/setup-browser-env.js",
    "test:webpack": "ava-webpack --webpack-config ./build/webpack.config-test.js --polyfill babel-polyfill --clean",
    "test:webpack:ci": "ava-webpack --webpack-config ./build/webpack.config-test.js --polyfill babel-polyfill --clean --tap"
}
```

### Bundler

For web development we need a bundler and loader such as `webpack` to be able to load various different assets and bundle them together etc.

*webpack*
- `yarn add webpack webpack-node-externals --save-dev`

See [ava-webpack](https://github.com/thrandre/ava-webpack)

- `yarn add ava-webpack`

*typescript with webpack*

`yarn add awesome-typescript-loader --save-dev`

*webpack.typescript.config*

```js
var path = require('path');

module.exports = {
    resolve: {
        root: [
            path.resolve(__dirname, 'src')
        ],
        extensions: ['', '.ts', '.tsx', '.js']
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};
```

*browser testing (for modules used in web apps only)*

`yarn i add browser-env --D`
