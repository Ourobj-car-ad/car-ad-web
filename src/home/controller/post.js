'use strict';

import Base from './base.js';

export default class extends Base {

  async sendadAction(){
    let instance = this.model("ad_to_audit");
    //return this.success(instance);
    let p = this.post();
    
    let currentTime = think.datetime();
    
    let data = await instance.addOne(
        currentTime,
        currentTime,
        p.money,
        p.from_date,
        p.to_date,
        p.id,
        p.content,
        p.times,
        p.regions
    );

    let advertiserInfo = await this.session("advertiserInfo");

    //return this.success(data);
    let model = this.model("ad");
    let threeAds = await model.getLast3();
    
    this.assign({
        title:"投放成功 | 待审核",
        advertiser:advertiserInfo,
        threeAds:threeAds,
    })
    
    return this.display("adver/index");

  }
  
  async reviewAction(){
    let instance = this.model("ad_to_audit");
    //return this.success(instance);
    let params = this.post();
    let p = params["ids[]"];
    p = p.split(",");

    let arr = [];
    for(let i=0;i<p.length;i++){
        let item = p[i];
        let index = i;
        let data = await instance.getById(item);
        arr.push(data);
        await instance.where({id: item }).delete();
    }
    
    //return this.success(arr);
    
    let ad = this.model("ad");
    let incomeModel = this.model("income_and_expense");
    
    for (let i=0;i<arr.length;i++){
        let data = arr[i];
        
        let result = await ad.addOne(
          think.datetime(data.create_time),
          think.datetime(),
          data.price,
          think.datetime(data.start_time),
          think.datetime(data.end_time),
          data.advertiser_id,
          data.content,
          data.play_times,
          data.regions);
          
        let incomeData = await incomeModel.addOne({
            time:think.datetime(),
            if_income:1,
            if_expense:0,
            amount:data.price,
        })
    }
    


    //let currentTime = think.datetime();
    
    //let data = await instance.get(p.id);

    return this.success("Ok");
    

  } 
  

  async getadAction(){
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
        await this.session("advertiserInfo", data);
        let tokenService = think.service("token");
        let tokenServiceInstance = new tokenService();
        //写入token
        let token = await tokenServiceInstance.createToken({
            userInfo: {
            id: data.id,
            email: data.email
            }
        });
        //传输客户端token
        //this.http.header("token", token);
        await this.session("token",token);
        this.assign({
            title:"登陆成功"
        });

        let model = this.model("advertiser_login_record");
        await model.addOne({
            time:think.datetime(),
            advertiser_id:data.id,
        });
        
        return this.redirect("/adver/index");
    }else{
        await this.session();
        this.assign({
            title:"登陆失败"
        })
        return this.display("index/index");
    }



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
        await this.session("userInfo", data);
        let tokenService = think.service("token");
        let tokenServiceInstance = new tokenService();
        //写入token
        let token = await tokenServiceInstance.createToken({
            userInfo: {
            id: data.id,
            email: data.email
            }
        });
        //传输客户端token
        //this.http.header("token", token);
        await this.session("token",token);
        this.assign({
            title:"登陆成功"
        });
        let model = this.model("user_login_record");
        await model.addOne({
            time:think.datetime(),
            user_id:data.id,
        });
        return this.redirect("/index/download");
        
    }else{
        await this.session();
        this.assign({
            title:"登陆失败"
        });
        return this.display("index/index");
    }

    
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
    
    let tokenService = think.service("token");
    let tokenInstance = new tokenService();
    
    let token = await tokenInstance.createToken({
        userInfo:{
            id:data,
            email:p.email2,
        }
    });
    
    //this.http.header("token",token);
    await this.session("token",token);
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

    let tokenService = think.service("token");
    let tokenInstance = new tokenService();
    
    let token = await tokenInstance.createToken({
        userInfo:{
            id:data,
            email:p.email2,
        }
    });
    
    //this.http.header("token",token);
    await this.session("token",token);

     this.assign({
         title:"注册成功"
     })   



    return this.display("index/index");
    
    //return this.success(data);
  }
    
    async adminlogoffAction(){
            await this.session();
            this.assign({
                title:"管理员登出成功"
            })
            return this.display("index/index");

      }
    
    async adminloginAction(){
        let p = this.post();
        
        let model = this.model("admin");
        let data = await model.get(
            p.email,
            p.password,
        );
        
        let isEmpty = think.isEmpty(data);
        if(isEmpty){
            await this.session();
            this.assign({
                title:"管理员登陆失败"
            }) 
            return this.display("index/index");
        }else{
            await this.session("adminInfo", data);
            let tokenService = think.service("token");
            let tokenServiceInstance = new tokenService();
            //写入token
            let token = await tokenServiceInstance.createToken({
                userInfo: {
                id: data.id,
                name: data.name
                }
            });
            //传输客户端token
            //return this.success(token);
            //return this.success(this.http.headers);
            await this.session("token",token);
            //this.http.header("token", token);
            //return this.success(this.http.headers);
            //return this.success("SUCCESS");
            this.assign({
                title:"老司机网 | 后台管理"
            })
            //return this.success("wow")
            return this.redirect("/admin/index");
        }
      }
  
  
}