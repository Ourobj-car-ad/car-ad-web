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
        p.nickname2,
        p.email2,
        p.spassword,
        p.realname,
        p.phone,
        p.drivinglic,
        p.pay,
        p.drivingCode,
        p.city,
    );

    return this.success(data);
    
    //return this.success(data);
  }
  
  
}