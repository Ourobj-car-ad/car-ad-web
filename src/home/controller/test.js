'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let model = this.model("ad");
    
    let currentTime = think.datetime();
    
    let data = await model.addOne(
        currentTime,
        currentTime,
        0,
        currentTime,
        currentTime,
        1,
        "So Easy!"
    );
    
    return this.success(data);

  }
  

  
}