import { log, stringify } from '../../../utils'

class Validator {
  constructor(value) {
    if (!value) {
      throw 'Validator: Invalid value, was null'
    }
    this.value = value
  }

  isQuestionList() {
    let list = this.value
    if (!Array.isArray(list)) return
    return this.isQuestion(list[0])
  }

  isQuestion(q) {
    q = q || this.value
    if (typeof q !== 'object') return
    if (q.name) {
      return true
    }
    return false
  }  

  get type() {
    if (this.isQuestion()) return ':question'
    if (this.isQuestionList()) return ':questions'    
  }    
}

export default (value) => {
  return new Validator(value)
}
