'use strict';

import jwt from 'jsonwebtoken'

let secret = think.config('token.secret');

let expiresIn = think.config('token.expiresIn');

export default class extends think.service.base {
  /**
   * init
   * @return {}         []
   */
  createToken(userinfo){
    let result = jwt.sign(userinfo,secret);
    return result;
  }
  
  verifyToken(token){
    if(!token) return 'fail';
    try{
      let result = jwt.verify(token,secret);
      return result;
    }catch(err){
      return 'fail';
    }
    
  }


}