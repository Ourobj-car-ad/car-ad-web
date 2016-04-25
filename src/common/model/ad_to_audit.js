'use strict';
/**
 * model
 */
export default class extends think.model.base {
    
  async addOne(create_time,update_time,price,start_time,end_time,advertiser_id,content,times,regions){
    let model = this.model("ad_to_audit");
    let data = await model.add({
        create_time:create_time,
        update_time:update_time,
        price:price,
        start_time:start_time,
        end_time:end_time,
        advertiser_id:advertiser_id,
        content:content,
        times:times,
        regions:regions
    })
    return data;
  }
  
  async getAll(){
    let model = this.model("ad_to_audit");
    let data = await model.order({
      id: "DESC"
    }).select();
    return data;
  }
  
}