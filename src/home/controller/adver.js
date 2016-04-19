'use strict';

import Base from './base.js';

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