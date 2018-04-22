const mongoose = require('mongoose');

// 创建schema
const userInfoSchema = new mongoose.Schema({
  name: String,
  password: String,
  scores: Array 
});

// 创建model
const userInfoModel = mongoose.model('userInfo', userInfoSchema) ;

module.exports = userInfoModel;