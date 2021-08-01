/**
 * @description sequelize 同步数据库
 * @author Laoliu
 */

const seq = require("./seq");

// require("./model");

//测试链接
seq
  .authenticate()
  .then(() => {
    console.log("ok");
  })
  .catch(() => {
    console.log("err");
  });

seq.sync({ force: true }).then(() => {
  process.exit();
});
