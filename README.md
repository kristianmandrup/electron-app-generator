# electron-app-generator

Electron app to configure a project environment/setup, including dependencies & configuration for:
- runtime
- development environment & tools

You can use this app instead of typical CLI generator such as:
- [yeoman](http://yeoman.io/)
- [slush](https://www.npmjs.com/package/slush-node)
- ...

This project aims to provide a much better UI/UX experience!
Prompts are divided into categories you can select via the main tabs.
Each category can have one or more sub-categories if needed.
Each category displays a form with various inputs where you can select your choices.
As you make choices, the following are updated dynamically:
- npm modules to be installed
- scripts to be configured
- ...

You can view these updates as you make choices so you can preview what effect your choices will have
on your project before you select `Sync`, to sync the project.

## Pre install

Install electron binary globally

`npm i electron -g` or `yarn add electron -g`

## Build Setup

### Npm

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron app for production
npm run build

# lint all JS/Vue component files in `app/src`
npm run lint

# run webpack in production
npm run pack
```

### Yarn (alternative npm)

`yarn install`

More information can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/npm_scripts.html).

---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about this project can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

### Testing

`npm run ava` - ava unit tests
`npm run unit` - karma unit tests
`npm run e2e` - e2e tests

[ava](https://github.com/avajs/ava) is configured in `package.json` under the `ava` entry.