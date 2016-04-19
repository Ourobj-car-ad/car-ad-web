'use strict';
/**
 * model
 */
export default class extends think.model.base {

  async get(name,pwd){
    let model = this.model("admin");
    let data = await model.where({
      name: name,
      password:pwd
    }).find();
    return data;
  }

  async addAdmin(name,pwd){
      let model = this.model("admin");
      let result = await model.add({
          name:name,
          password:pwd
        });
      return result;
  }
  
}