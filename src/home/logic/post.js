'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
let rules;

export default class extends think.logic.base {
  /**
   * index action logic
   * @return {} []
   */
  indexAction(){
     this.allowMethods = "get,post";
  }
  
  loginAction(){
     this.allowMethods = "get,post";
     rules ={
         email:"required|string",
         password:"required|string"
     };
  }
  
  login2Action(){
     this.allowMethods = "get,post";
     rules ={
         email:"required|string",
         password:"required|string"
     };
  }
  
  signAction(){
     this.allowMethods = "get,post";
     rules ={
         nickname2:"required|string",
         email2:"required|string",
         spassword:"required|string",
         realname:"required|string",
         phone:"required|string",
         pay:"required|string",
     };
  }
  
  sign2Action(){
     this.allowMethods = "get,post";
     rules ={
         nickname2:"required|string",
         email2:"required|string",
         spassword:"required|string",
         realname:"required|string",
         phone:"required|string",
         drivinglic:"required|string",
         pay:"required|string",
         drivingCode:"required|string",
         city:"required|string",
     };
  }
  
  __after(){
     let flag = this.validate(rules);
     if (!flag) {
         return this.fail("服务验证错误，请核对数据重试", this.errors());
     }
  }
  
}