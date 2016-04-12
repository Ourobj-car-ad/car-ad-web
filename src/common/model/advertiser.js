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
  
  async add(name,email,pwd,realName,phone,alipay,sex,job,avatar){
    let model = this.model("advertiser");
    let data = await model.thenAdd({
        name: name,
        email:email,
        password:pwd,
        real_name:realName,
        phone:phone,
        alipay:alipay,
        sex:sex,
        job:job,
        avatar:avatar,
    },{
        name:name
    });
    return data;
  }
  
  
}