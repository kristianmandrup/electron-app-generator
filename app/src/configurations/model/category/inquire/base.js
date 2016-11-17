import { log, stringify } from '../../../utils'
import { merge } from 'lodash'
import validator from '../question/validator'
import inquisitor from 'master-inquisitor'
// import dispatch from '../dispatcher'

export default class Base {
  constructor(q, ctx  = {}, type) {   
    this.q = q
    this.type = type
    this.ctx = ctx
    this.log = log
    this.merge = merge
    // this.dispatch = dispatch 
    this.inquisitor = inquisitor
    this.validator = validator(q)
  }

  checkValid() {
    return true
  }
  
  ensureValid() {
    return this
    // if (!this.checkValid()) {
    //   throw `Invalid question value ${stringify(this.q)} : ${this.type}`
    // }
    // return this
  }

  // always merge result into ctx
  async ask() {
    let result = await this.askList()
    this.merge(this.ctx, result)
    return this.ctx 
  }

  // TODO: when allow use of custom prompts
  async askCustom() {
    return await this.prompter(this.q)
  }

  // ensure we always get object back as result by asking with prompt
  async askList() {
    let q = this.q
    q = Array.isArray(q) ? q : [q]
    return await this.inquisitor.prompt(q)
  }
}