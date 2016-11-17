export const useDecorators = {
  name: 'useDecorators',
  type: 'confirm',
  message: 'Add legacy decorators support',
  default: false
}

const decorator = {
  libs: ['core', 'lodash', 'dependency injection'], // di-decorators
  webLibs: ['hapi', 'express', 'koa']
}

export const decoratorLibs = () => {
  if (!ctx.useDecorators) return;

  return {
    name: 'decoratorLibs',
    type: 'checkbox',
    message: 'Add decorator libraries',
    choices: decorator.libs,
    default: decorator.libs
  }
}

export const webDecoratorLibs = () => {
  if (!ctx.useDecorators) return;

  return {
    name: 'webDecoratorLibs',
    type: 'checkbox',
    message: 'Add web decorator libraries',
    choices: decorator.webLibs,
    default: ['koa']
  }
}

