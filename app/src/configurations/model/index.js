import category from './category'
import { log } from '../utils'

class Model {
  constructor(opts = {}) {
    this.category = category(opts)
  }

  async run() {
    await this.category.ask()
  }
}

export default new Model()