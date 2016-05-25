'use strict';

import Base from './base.js';
import moment from 'moment'

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let advertiserInfo = await this.session("advertiserInfo");
    if(!advertiserInfo || !advertiserInfo.id){
        this.assign({
            title:"未登陆!",
        }) 
        return this.display('index/index')
    }
    
    let model = this.model("ad");
    let threeAds = await model.getLast3();
   
  // return this.success(threeAds);

    this.assign({
        title:"老司机网 | 欢迎您",
        advertiser:advertiserInfo,
        threeAds:threeAds,
        
    })
    return this.display();
  }
  
  async infoAction(){
    let advertiserInfo = await this.session("advertiserInfo");
    if(!advertiserInfo || !advertiserInfo.id){
        this.assign({
            title:"未登陆!",
        }) 
        return this.display('index/index')
    }
    
   
  // return this.success(threeAds);

    this.assign({
        title:"老司机网 | 欢迎您",
        advertiser:advertiserInfo,
        
    })
    //return this.success(advertiserInfo);
    return this.display();
  }
  
  async logAction(){
    let advertiserInfo = await this.session("advertiserInfo");
    if(!advertiserInfo || !advertiserInfo.id){
        this.assign({
            title:"未登陆!",
        }) 
        return this.display('index/index')
    }
    
   
  // return this.success(threeAds);

    this.assign({
        title:"老司机网 | 广告投放记录",
        advertiser:advertiserInfo,
        
    })
    
   let model = this.model("ad");
   let data = await model.order({
       create_time: "DESC"
   }).where({
       advertiser_id:advertiserInfo.id
   }).select();
   
   let refuseModel = this.model("ad_reject");
   let refuseData = await refuseModel.order({
       create_time: "DESC"
   }).where({
       advertiser_id:advertiserInfo.id
   }).select();
   
    let result = refuseData.concat(data);
    result.forEach(function(item,index){
        if(index >=refuseData.length){
            item.status = "审核通过";
        }else{
            item.status = "审核拒绝"
        }
        item.create_time = think.datetime(item.create_time);
    })
    /*
    result.sort(function(a,b){
        return moment(a.create_time) > moment(b.create_time)
    })*/
    
    
    
    this.assign({
        result:result,
    })
        /*return this.success(moment(result[3]));
    return this.success(moment(result[0]));*/
    
    return this.display();
  }
  
  
  
  async sendAction(){
    let advertiserInfo = await this.session("advertiserInfo");
    if(!advertiserInfo || !advertiserInfo.id){
        this.assign({
            title:"未登陆!",
        }) 
        return this.display('index/index')
    }
    
    let model = this.model("ad");
    let threeAds = await model.getLast3();
   
  // return this.success(threeAds);

    this.assign({
        title:"老司机网 | 欢迎您",
        advertiser:advertiserInfo,
        threeAds:threeAds,
    })
    return this.display();
  }
  
  async logoffAction(){
    await this.session();
    this.assign({
        title:"登出成功",
    })
    return this.display("index/index");
  }
  
  async showAction(){
      let data = await this.session("advertiserInfo");
      this.success(data);
  }
  
  
}