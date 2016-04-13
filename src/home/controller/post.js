'use strict';

import Base from './base.js';

export default class extends Base {

  async getaddAction(){
    let instance = this.model("ad");
    //return this.success(instance);
    let p = this.get();
    
    let currentTime = think.datetime();
    
    let data = await instance.get(p.id);

    return this.success(data);
    

  }

  async addadAction(){
    let instance = this.model("ad");
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
        p.content
    );

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

    let instance = this.model("advertiser");
    //return this.success(instance);
    let p = this.post();
    
    
    let data = await instance.get(
        p.email,
        p.password,
    );

    let isEmpty = think.isEmpty(data);
    if(!isEmpty){
        await this.session("advertiserId", data.id);
        await this.session("isAdvertiser","true");
        this.assign({
            title:"登陆成功"
        })
    }else{
        await this.session();
        this.assign({
            title:"登陆失败"
        })
    }
    

    return this.display("index/index");
    //return this.success(data);
  }
  
  async login2Action(){

    let instance = this.model("user");
    let p = this.post();
    
    let data = await instance.get(
        p.email,
        p.password,
    );

    let isEmpty = think.isEmpty(data);
    if(!isEmpty){
        await this.session("userId", data.id);
        await this.session("isUser","true"); 
        this.assign({
            title:"登陆成功"
        })
    }else{
        await this.session();
        this.assign({
            title:"登陆失败"
        })
    }
    return this.display("index/index");
    
  }
  
  async signAction(){
    //auto render template file index_index.html
    let instance = this.model("advertiser");
    //return this.success(instance);
    let p = this.post();
    //return this.success(p);
    let data = await instance.addOne(
        p.nickname2,
        p.email2,
        p.spassword,
        p.realname,
        p.phone,
        p.pay,
    );


    this.assign({
         title:"注册成功"
     })   


    return this.display("index/index");
    
    //return this.success(data);
  }
  
  
  async sign2Action(){
    //auto render template file index_index.html
    let instance = this.model("user");
    //return this.success(instance);
    let p = this.post();
    //return this.success(p);
    
    await instance.addOne(
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

     this.assign({
         title:"注册成功"
     })   



    return this.display("index/index");
    
    //return this.success(data);
  }
  
  
}