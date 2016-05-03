'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let model = this.model("advertiser_login_record");
    
    
    let data = await model.getToday()
    
    return this.success(data);

  }
  

  
}