'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){

    if(this.session("isAdmin")!=1){
        this.assign({
            title:"未登陆!"
        }) 
        return this.display('index/index')
    }

    this.assign({
        title:"老司机网 | 后台管理"
    })
    return this.display();
  }
  
  
  async loginAction(){

    this.assign({
        title:"管理员登陆"
    })
    return this.display("admin/login");
    
  }
  
  
}