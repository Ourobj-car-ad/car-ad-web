'use strict';
/**
 * model
 */
export default class extends think.model.base {
  async get(id){
    let model = this.model("ad");
    let data = await model.where({id: id}).find();
    return data;
  }
  
  async getLast3(){
    let model = this.model("ad");
    let data = await model.order({
      id: "DESC"
    }).limit(3).select();
    return data;
  }
  
  async addOne(create_time,update_time,price,start_time,end_time,advertiser_id,content){
    let model = this.model("ad");
    let data = await model.add({
        create_time:create_time,
        update_time:update_time,
        price:price,
        start_time:start_time,
        end_time:end_time,
        advertiser_id:advertiser_id,
        content:content,
    })
    return data;
  }
}