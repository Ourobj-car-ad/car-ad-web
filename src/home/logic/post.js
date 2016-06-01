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
         email:{
             required:true,
             regexp:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
         },
         password:"required|string"
     };
  }
  
  login2Action(){
     this.allowMethods = "get,post";
     rules ={
         email:{
             required:true,
             regexp:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
         },
         password:"required|string"
     };
  }
  
  signAction(){
     this.allowMethods = "get,post";
     rules ={
         nickname2:"required|string",
         email2:{
             required:true,
             regexp:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
         },
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
         email2:{
             required:true,
             regexp:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
         },
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
         this.assign({title:"邮箱不正确,请您重新输入!"});
         this.assign({isAlert:true});
         return this.display("index/index")
     }
  }
  
}