'use strict';
/**
 * model
 */
export default class extends think.model.base {
  async get(name,pwd){
    let model = this.model("user");
    let data = await model.where({
        name: name,
        password:pwd,
        }).find();
    return data;
  }
  
  async add(name,email,pwd,realName,phone,carTravelCode,alipay,carCode,city,carImage){
    let model = this.model("advertiser");
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
        car_image:carImage,
    },{
        name:name
    });
    return data;
  }
  
}