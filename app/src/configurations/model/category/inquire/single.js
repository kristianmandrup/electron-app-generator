import Base from './base'

class Single extends Base {
  // can be either Object or Array
  constructor(q, ctx) {   
    super(q, ctx, 'single')
    // this.checkValid = this.validator.isQuestion
    this.prompter = this.inquisitor.prompt 
  }
}

export default (q) => {
  return new Single(q) //.ensureValid()
}
