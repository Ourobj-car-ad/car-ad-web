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
        /*
        p.startTime,
        p.endTime,
        */
        currentTime,
        currentTime,
        p.adId,
        p.advertiserId,
        p.userId,
        p.regionInfo
    );
    
    
    
    let income_and_expense = this.model("income_and_expense");
    let result = await income_and_expense.addOne({
      time:currentTime,
      if_income:0,
      if_expense:1,
      amount:p.price
    })

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