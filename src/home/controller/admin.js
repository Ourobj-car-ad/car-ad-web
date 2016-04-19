'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let adminInfo = await this.session("adminInfo");
    if(!adminInfo || !adminInfo.id){
        this.assign({
            title:"未登陆!",
        }) 
        return this.display('index/index')
    }

    this.assign({
        title:"老司机网 | 后台管理",
        adminInfo:adminInfo,
    })
    return this.display();
  }
  
  
  async loginAction(){
    let adminInfo = await this.session("adminInfo");
    if(!adminInfo || !adminInfo.id){
        this.assign({
            title:"管理员登陆",
        })
        return this.display("admin/login");
    } 
    
    this.assign({
        title:'欢迎'
    })
    
    return this.redirect("/admin/index");


    
  }
  
  async showAction(){
      let data = await this.session("adminInfo");
      this.success(data);
  }
  
  
}