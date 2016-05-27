'use strict';
/**
 * model
 */
export default class extends think.model.base {
    
  async addOne(create_time,update_time,price,start_time,end_time,
      advertiser_id,content,times,regions,title){
    let model = this.model("ad_to_audit");
    let obj = {
        create_time:create_time,
        update_time:update_time,
        price:price,
        start_time:start_time,
        end_time:end_time,
        advertiser_id:advertiser_id,
        content:content,
        play_times:times,
        regions:regions,
        title:title,
    };
        //return obj
    let data = await model.add(obj)

    return data;
  }
  
  async getAll(){
    let model = this.model("ad_to_audit");
    let data = await model.order({
      id: "DESC"
    }).select();
    return data;
  }
  
  async getByPage(pageNum){
    let model = this.model("ad_to_audit");
    let data = await model.order({
      id: "DESC"
    }).page(pageNum, 10).countSelect()
    return data;
  }
  
  async getById(id){
    let model = this.model("ad_to_audit");
    let data = await model.where({id:id}).find();
    return data;
  }
  
}