'use strict';

import Base from './base.js';

export default class extends Base {

  
  async loginAction(){

    let instance = this.model("user");
    //return this.success(instance);
    let p = this.get();
    
    let data = await instance.get(
        p.email,
        p.pwd,
    );

    return this.success(data);
    
    //return this.success(data);
  }
  
  async signAction(){
    //auto render template file index_index.html
    let instance = this.model("user");
    //return this.success(instance);
    let p = this.get();
    
    let data = await instance.addOne(
        p.name,
        p.email,
        p.pwd,
        p.realName,
        p.phone,
        p.carTravelCode,
        p.alipay,
        p.carCode,
        p.city,
    );

    return this.success(data);
    
    //return this.success(data);
  }
  
  
}