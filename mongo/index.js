import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/qqqq');
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var UsersSchema = mongoose.Schema({
  id: {type : String, unique: true}, // ID
  passwd : {type : String}, // Password
  token: {type : String}, // 토큰
  emailList : [{
    email : {type: String} // 이메일
  }],
  accountList : [{
    email : {type : String}
  }]
})

var EmailsSchema = mongoose.Schema({
  email: {type : String, unique: true}, // email
  passwd: {type : String},
  token: {type : String}
})

var Users = mongoose.model('users', UsersSchema);
var Emails = mongoose.model('emails', EmailsSchema)

require('./err')(UsersSchema, EmailsSchema);

export {Users, Emails};

export default db;
