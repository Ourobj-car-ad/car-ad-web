'use strict';

import Base from './base.js';

export default class extends Base {
  
  async getbyuseridAction(){
    let p = this.get();
    let id = p.id;
    let userModel = this.model("user");
    let data = await userModel.where({id:id}).find();
    
    let ad_id = data.current_ad_id;
    
    data = await this.model("ad").where({
      id:ad_id,
    }).find();
    //return this.success(data.content);

    if(ad_id != 0 && data.remain_times !=0){
      //给广告减1次
      let adModel = this.model("ad");
      //return this.success(ad_id);
      await adModel.where({id:ad_id}).decrement("remain_times",1);
      //return this.success(wowData);
      //给用户+1毛
      let userModel = this.model("user");
      await userModel.where({id:id}).increment("earnings",0.01);
      
      //给Order表加一条数据
      let orderModel = this.model("order");
      let currentTime = think.datetime();

      await orderModel.add({
        create_time:currentTime,
        status:1,
        update_time:currentTime,
        per_price:(0.01).toString(),
        start_time:currentTime,
        end_time:currentTime,
        ad_id:data.id,
        advertiser_id:data.advertiser_id,
        user_id:id,
        region_info:data.regions,
        context:data.content
      })
        return this.success(data.content);
    }
    
    return this.success("Your phone is not active!");
    
  }
  
  async exitwithuseridAction(){
    let p = this.get();
    let id = p.id;
    let userModel = this.model("user");
    let data = await userModel.where({id:id}).update({current_ad_id:0});

    return this.success(data);
    
  }
  
  
  async getbytypeAction(){
    let instance = this.model("ad");
    let p = this.get();
    let currentTime = think.datetime();
    let types = p.types.split(",");
    let id = p.id;
    let index = Math.floor(Math.random()*(types.length));
    let type = types[index];
    
       // return this.success(index);
    
    let data = await instance.where({
      regions:type,
      remain_times:{"!=":0},
    }).order({
      id:"ASC"
    }).limit(1).find();
    
    if (think.isEmpty(data)){
      data = await instance.where({
        remain_times:{"!=":0}
      }).order("rand()").limit(1).find();
    }
    
    let userModel = this.model("user");
    await userModel.where({id:id}).update({current_ad_id:data.id});
    
    return this.success(data);
    
  }

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