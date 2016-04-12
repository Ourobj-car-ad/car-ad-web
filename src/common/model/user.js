'use strict';
/**
 * model
 */
export default class extends think.model.base {
  async get(email,pwd){
    let model = this.model("user");
    let data = await model.where({
        email: email,
        password:pwd,
        }).find();
    return data;
  }
  
  async addOne(name,email,pwd,realName,phone,carTravelCode,alipay,carCode,city,carImage){
    let model = this.model("user");
    let data = await model.thenAdd({
        name: name,
        email:email,
        password:pwd,
        phone:phone,
        car_travel_code:carTravelCode,
        real_name:realName,
        alipay:alipay,
        car_code:carCode,
        city:city,
    },{
        name:name
    });
    return data;
  }
  
}