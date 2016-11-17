import inquire from './inquire'
import resolver from './question/resolver' 
import { log } from '../../utils'

class Dispatcher {
  constructor(value, ctx) {
    this.value = value 
    this.ctx = ctx
  }

  async resolve() {
    try {
      this.resolved = await resolver(this.value, this.ctx).resolve()
      return this
    } catch (err) {
      console.log('resolve err', err)
    }
  }

  async ask() { 
    return await this.askList() || this.askObjList() || this.askSingle() 
  }

  // must contain questions for prompt
  async askList() {
    let q = this.resolved.questions
    if (!q) return
    return await inquire.list(q, this.ctx).ask()
  }

  async askSingle() {
    let q = this.resolved.question
    if (!q) return
    return await inquire.single(q, this.ctx).ask()
  }

  async askObjList() {
    let q = this.resolved.questionObjs
    if (!q) return
    return await inquire.objList(q, this.ctx).ask()
  }
}

const dispatch = (value, ctx) => {
  return new Dispatcher(value, ctx) 
}

export default async (value, ctx) => {
  let dp = dispatch(value, ctx)
  return await dp.resolve()
}
