'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let instance = this.model("admin");
    let data = await instance.listAction();
    this.assign({
        title:"Name is : " + data.name,
        password: data.password 
    });
    return this.display();
    
    //return this.success(data);
  }
}