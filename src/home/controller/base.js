'use strict';

let user;

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async __before(action){
    //this.fail(this.http.action)
    var ac = this.http.action;
    //return this.success(ac);
    if(ac ==='login'||
       ac === 'sign'||
       ac === 'index'||
       ac === 'login2'||
       ac === 'sign2' ||
       ac === 'adminlogin'||
       ac === 'show' ||
       ac === 'logoff')
      return;
    
    let userToken = this.http.header("token");

    let tokenService = think.service("token");
    let tokenServiceInstance = new tokenService();

    let verifyTokenResult = await tokenServiceInstance.verifyToken(userToken);

    if (verifyTokenResult === "fail") {
      this.fail("TOKEN_INVALID")
    }

    user = verifyTokenResult.userInfo;

    let newToken = await tokenServiceInstance.createToken({
      userInfo: verifyTokenResult.userInfo
    });
    this.http.header("token", newToken);
    
    
  }
  
  __call() {
    this.fail("NEED_LOGIN");
  }
  
  userInfo() {
    return user;
  }

  
}