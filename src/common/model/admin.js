'use strict';
/**
 * model
 */
export default class extends think.model.base {
  async indexAction(){
    let model = this.model("admin");
    let data = await model.where({name: "admin"}).find();
    return data;
  }
  async selectWithNameAction(name){
    let model = this.model("admin");
    let data = await model.where({name: name}).find();
    return data;
  }
  async selectWithId(id){
      let model = this.model("admin");
      let data = await model.where({id:id}).find();
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