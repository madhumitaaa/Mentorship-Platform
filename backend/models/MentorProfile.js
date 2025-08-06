const mongoose=require('mongoose')
const mentorProfileSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    bio:String,
    skills:[String],
    experience: String,
    availability: String,
    contactLinks: {
        linkedin: String,
        portfolio: String
    }
});
module.exports=mongoose.model('MentorProfile',mentorProfileSchema);
