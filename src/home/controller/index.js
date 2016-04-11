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
    return this.display();
    
    //return this.success(data);
  }
}