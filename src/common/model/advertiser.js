'use strict';
/**
 * model
 */
export default class extends think.model.base {
  async get(email,pwd){
    let ad = this.model("advertiser");
    let data = await ad.where({
        email: email,
        password:pwd,
        }).find();
    return data;
  }
  
  
  async addOne(name,email,pwd,realName,phone,alipay){
    let ad = this.model("advertiser");
    let data = await ad.thenAdd({
        name: name,
        email:email,
        password:pwd,
        real_name:realName,
        phone:phone,
        alipay:alipay,
    },{
        name:name,
        email:email
    });
    return data;
  }
  
  
}