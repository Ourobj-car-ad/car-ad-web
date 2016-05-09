'use strict';

let user;

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async __before(action){
    //return this.fail(this.http)
    var ac = this.http.action;
    //return this.json(ac);
    //return true;
    
    var permit = [
      "login","sign",
      "login2","sign2",
      "index",
      "adminlogin","adminlogoff",
      "show",
      "getad",
      //"review"
    ]
    
    //return this.success(ac);
    if (permit.indexOf(ac)!=-1)
      return;
    
    //let userToken = this.http.header("token");
    let userToken = await this.session("token");


    let tokenService = think.service("token");

    
    let tokenServiceInstance = new tokenService();


    let verifyTokenResult = await tokenServiceInstance
                          .verifyToken(userToken);

    if (verifyTokenResult === "fail") {
      //this.fail("TOKEN_INVALID")
      return this.redirect("index/index");
    }
    
        

    user = verifyTokenResult.userInfo;

    let newToken = await tokenServiceInstance.createToken({
      userInfo: verifyTokenResult.userInfo
    });

    await this.session("token",newToken);
    
    
        //return this.success(await this.session("token"))
    
    
  }
  
  __call() {
    return this.redirect("index/index");
    //this.fail("NEED_LOGIN_FIRST");
  }
  
  userInfo() {
    return user;
  }

  
}