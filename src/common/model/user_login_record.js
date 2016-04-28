'use strict';
/**
 * model
 */
export default class extends think.model.base {
    async addOne(obj){
        let model = this.model("user_login_record");
        let data = model.where({
            user_id:
        })
        
        
        let data = model.add({
            time: obj.time,
            user_id:obj.user_id,
        });
        return data;
    }
}