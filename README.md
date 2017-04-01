# electron-app-generator

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/electron-app-generator.svg)](https://greenkeeper.io/)

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

## Architecture

The goal is to make it as declarative as possible while making the least amount of sacrifices...

In the configurations you can define all the modules, script etc. that the generator can possibly generate
as side effects. For each module you can define a mode such as `dev` for development etc.

```js
export default {
  modules: {
    name: 'modules',
    label: 'Modules',
    icon: 'send',
    items: [{
      mode: 'dev',
      name: 'ava'
    }, {
      mode: 'dev',
      name: 'ava-spec'
    }]
  },
  scripts: {
    name: 'scripts',
    label: 'Scripts',
    icon: 'send',
    items: [{
      name: 'lint',
      value: 'eslint'
    }, {
      name: 'test',
      value: 'ava'
    }]
  },
```

### Prompts

The prompts are specified declaratively as well. Here we define a prompt for
choosing the test framework of choice, either `mocha` or `ava`.
Prompts also categorized into `test`, `ui` etc.

```js
export default [{
  type: 'list',
  name: 'test',
  choice: 'ava',
  choices: [{label: 'Ava', value: 'ava'}, {label: 'Mocha', value: 'mocha'}],
  message: 'Test library'
},
  // ...
```

### Filters

You can then setup filters, which filter all the modules, scripts etc. based on the choices made
using the answers to the prompts. Filters are categorized using the same categories as for prompts.

```js
export default {
  unit: {
    ava: {
      modules: ['ava', 'ava-spec'],
      scripts: {
        test: 'ava'
      }
    },
    mocha: {
      modules: ['mocha', 'mocha-spec'],
      scripts: {
        test: 'mocha'
      }
    }
  }
}
```

This means that an `ava` choice in to the `unit` prompt (of the `test` category) will add
certain modules, scripts etc. suitable for that choice to the side effects of the generator.

## Configuraiton models and docs

Please look in `configurations`:
-  `/model`
- `/docs`
- `package.jso`

In order to see what we are aiming for ;)

## License

MIT

(c) Kristian Mandrup 2016

