'use strict';
/**
 * model
 */
export default class extends think.model.base {
    async addOne(obj){
        let model = this.model("income_and_expense");
        
        
        let data = model.add({
            time:obj.time,
            if_income:obj.if_income,
            if_expense:obj.if_expense,
            amount:obj.amount
        });
        return data;
    }
    
    async getByPage(pageNum){
        let model = this.model("income_and_expense");
        let data = await model.order({
        id: "DESC"
        }).page(pageNum, 10).countSelect()
        return data;
    }
    
    async getToday(){
        let model = this.model("income_and_expense");
        
        
        let sql = "SELECT * FROM car_income_and_expense where to_days(time) = to_days(now());"
        sql = model.parseSql(sql);

        let data = await model.query(sql);
        //return temp;
        //let data = await model.execute(sql);
        
        
        return data;
    }
}