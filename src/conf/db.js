/**
 * @description 数据库 redis配置
 * @author Laoliu
 */
const { isProd, isDev } = require("../utils/env");
let MYSQL_CONF;
let REDIS_CONF;
if (isProd) {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "Lj970528",
    port: "3306",
    database: "koa2_weibo_db",
  };

  //redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };
}
if (isDev) {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "Lj970528",
    port: "3306",
    database: "koa2_weibo_db",
  };
  //redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
};
