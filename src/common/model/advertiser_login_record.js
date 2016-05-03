'use strict';
/**
 * model
 */
export default class extends think.model.base {
    async addOne(obj){
        let model = this.model("advertiser_login_record");
        
        
        let data = model.add({
            time: obj.time,
            advertiser_id:obj.user_id,
        });
        return data;
    }
    
    async getToday(){
        let model = this.model("advertiser_login_record");
        
        
        let data = model.where({
            
        }).count();
        return data;
    }
}