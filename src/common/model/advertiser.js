'use strict';
/**
 * model
 */
export default class extends think.model.base {
  async indexAction(name){
    let model = this.model("advertiser");
    let data = await model.where({name: name}).find();
    return data;
  }
}