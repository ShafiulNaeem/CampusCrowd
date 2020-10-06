var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
  email: { type:String, required:true, unique: true },
  password: { type:String, required:true },
  role: { type:String, required:true },
  user_first_name: { type: String, lowercase: true},
  user_last_name: { type: String, lowercase: true},
  user_gender: { type: String },
  user_semister: { type: String },
  user_department: { type: String },
  image: { type:String },
  user_birth: { type: String },
  user_address: { type: String },
  user_contract: { type: String },
  status: { type: Boolean },
  created_by: { type:String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})
// module.exports=mongoose.model('CCUser',userSchema);

module.exports=mongoose.model('User',userSchema);