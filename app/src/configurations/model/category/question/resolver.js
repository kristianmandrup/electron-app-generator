import validator from './validator'
// import dispatch from '../dispatcher'
import { log } from '../../../utils'

class Resolver {
  constructor(value, ctx) {
    this.value = value
    this.ctx = ctx
    this.validator = validator(value)
  }

  async resolve() {
    let v = this.value
    switch (this.validator.type) {
      case ':question':
        this.questions = [v]
        return this
      case ':questions':
        this.questions = v
        return this
      default:
        return this.resolveFunction() || await this.resolveObjs() 
    }  
  }

  async resolveObjs() {
    let v = this.value
    if (typeof v !== 'object') return
    let q = v.questions || v.default
    if (q) {
      return ':dispatch'       
      // return await dispatch(q, this.ctx)
    }
    this.questionObjs = v
    return this   
  }

  resolveError() {
    throw `Unable to resolve: ${this.value}`
  }

  async resolveFunction() {
    let v = this.value
    if (typeof v !== 'function') return
    let fun = v 
    this.value = fun(this.ctx);
    return await this.resolve()
  }
}  

const resolve = (value, ctx) => {
  return new Resolver(value, ctx)
}

export default resolve