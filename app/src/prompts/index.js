import project from './project'
import test from './test'
import lint from './lint'

export default {
  project: {
    label: 'Project',
    prompts: project
  },
  test: {
    label: 'Test',
    prompts: test
  },
  lint: {
    label: 'Lint',
    prompts: lint
  }
}
