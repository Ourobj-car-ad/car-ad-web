'use strict';
/**
 * model
 */
export default class extends think.model.base {
  async listAction(){
    let model = this.model("admin");
    let data = await model.where({name: "admin"}).find();
    return data;
  }
}