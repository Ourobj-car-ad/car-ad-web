'use strict';
/**
 * model
 */
export default class extends think.model.base {
    
  async get(id){
    let model = this.model("order");
    let data = await model.where({id: id}).find();
    return data;
  }
  
  async addOne(create_time,update_time,price,start_time,end_time,adverser_id,user_id,region_info){
    let model = this.model("order");
    let data = await model.add({
        create_time:create_time,
        update_time:update_time,
        status:1,
        price:price,
        start_time:start_time,
        end_time:end_time,
        advertiser_id:advertiser_id,
        user_id:user_id,
        region_info:region_info
    })
    return data;
  }
  
}