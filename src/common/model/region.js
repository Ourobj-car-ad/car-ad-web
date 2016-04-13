'use strict';
/**
 * model
 */
export default class extends think.model.base {
  async get(name){
    let model = this.model("region");
    let data = await model.where({name: name}).find();
    return data;
  }

}