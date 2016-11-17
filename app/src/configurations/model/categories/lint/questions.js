const rules = [ 'filenames' ]

export const lintRules = {
  name: 'lintRules',
  type: 'checkbox',
  message: 'Extra lint rules',
  choices: rules,
  default: rules
}

