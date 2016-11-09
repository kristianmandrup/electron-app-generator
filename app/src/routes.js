const PromptTabs = require('components/PromptTabs')
const Configurations = require('components/Configurations')

export default [
  {
    path: '/',
    name: 'landing-page',
    component: PromptTabs
  },
  {
    path: '/prompt/:id',
    name: 'prompt',
    component: PromptTabs
  },
  {
    path: '/configurations/:id',
    name: 'configurations',
    component: Configurations
  },
  {
    path: '*',
    redirect: '/'
  }
]
