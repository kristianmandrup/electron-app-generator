import Base from './base'
// import dispatch from '../dispatcher'

class ObjList extends Base {
  // can be either Object or Array
  constructor(q, ctx) {   
    super(q, ctx, 'objList')
    this.categories = q
    this.keys = Object.keys(this.categories)
  }

  // iterate and resolve
  // we can build up nested hierarchy this way
  async ask() {
    for (let key of this.keys) {
      let value = this.categories[key]
      // let result = await dispatch(value, this.ctx)
      this.ctx[key] = {} //result 
    }
    return this.ctx 
  }
}

const list = (categoriesObj) => {
  return new ObjList(categoriesObj) //.ensureValid()
}

export default list 
    