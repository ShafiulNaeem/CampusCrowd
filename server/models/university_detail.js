var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var universitySchema=new Schema({
  uni_name: { type: String, lowercase: true},
  uni_detail: { type: String, lowercase: true},
  uni_description: { type: String },
  uni_department: { type: String },
  uni_rank: { type: String },
  uni_location: { type:String },
  created_by: { type:String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})

module.exports=mongoose.model('UniversityDetail',universitySchema);