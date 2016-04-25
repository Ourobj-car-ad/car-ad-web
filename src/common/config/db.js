'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      /*
      host: '139.129.132.60',
      port: '3306',
      database: 'ad',
      user: 'user',
      password: '75319',
      prefix: 'car_',
      encoding: 'utf8'
      */
      host: '127.0.0.1',
      port: '3306',
      database: 'ad',
      user: 'root',
      password: '',
      prefix: 'car_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};