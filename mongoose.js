const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/school', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {console.log('数据库连接成功...');});

//创建学生集合数据模型
const studentsSchema = new mongoose.Schema({
  name: String,
  number: Number,
  class: Number,
  gender: String,
  age: Number
});

const StudentsModel = mongoose.model('Student', studentsSchema);

//1.新建一个学生信息
const shiwu = {name: 'shiwu', number: 22, class: 14, gender: 'male', age: 18};
StudentsModel.create(shiwu);