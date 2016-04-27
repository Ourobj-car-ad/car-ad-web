'use strict';

import Base from './base.js';

export default class extends Base {

  async getadAction(){
    let instance = this.model("ad");
    //return this.success(instance);
    let p = this.get();
    
    let currentTime = think.datetime();
    
    let data = await instance.get(p.id);

    return this.success(data);
    

  }


 
  async getorderAction(){
    let instance = this.model("order");
    //return this.success(instance);
    let p = this.get();
    
    let currentTime = think.datetime();
    
    let data = await instance.get(p.id);

    return this.success(data);
    

  }
  
  async addorderAction(){
    let instance = this.model("order");
    //return this.success(instance);
    let p = this.get();
    
    let currentTime = think.datetime();
    
    let data = await instance.addOne(
        currentTime,
        currentTime,
        p.price,
        p.startTime,
        p.endTime,
        p.adverserId,
        p.userId,
        p.regionInfo
    );

    return this.success(data);
    

  }
  
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
    

  }
  
  
}