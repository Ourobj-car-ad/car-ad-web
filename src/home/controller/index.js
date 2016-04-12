'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    //let instance = this.model("admin");
    //return this.success(instance);
    //let data = await instance.selectWithNameAction("admin");
    //this.assign({
    //    title:"Name is : " + data.name,
    //    password: data.password 
    //});
    this.assign({
        title:"老司机网 | 快速承接广告，发布广告"
    })
    return this.display();
    
    //return this.success(data);
  }
  
  async loginAction(){
    //auto render template file index_index.html
    //let instance = this.model("admin");
    //return this.success(instance);
    //let data = await instance.selectWithNameAction("admin");
    //this.assign({
    //    title:"Name is : " + data.name,
    //    password: data.password 
    //});
    this.assign({
        title:"登陆"
    })
    return this.display("index/login");
    
    //return this.success(data);
  }
  
  async signAction(){
    //auto render template file index_index.html
    //let instance = this.model("admin");
    //return this.success(instance);
    //let data = await instance.selectWithNameAction("admin");
    //this.assign({
    //    title:"Name is : " + data.name,
    //    password: data.password 
    //});
    this.assign({
        title:"注册"
    })
    return this.display("index/sign");
    
    //return this.success(data);
  }
  
  
}