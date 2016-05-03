'use strict';
/**
 * model
 */
export default class extends think.model.base {
    async addOne(obj){
        let model = this.model("advertiser_login_record");
        
        
        let data = model.add({
            time: obj.time,
            advertiser_id:obj.advertiser_id,
        });
        return data;
    }
    
    async getToday(){
        let model = this.model("advertiser_login_record");
        
        
        let sql = "SELECT * FROM car_advertiser_login_record where to_days(time) = to_days(now());"
        sql = model.parseSql(sql);
        let data = await model.query(sql);
        //let data = await model.execute(sql);
        
        
        return data;
    }
}