const mongoose=require('mongoose');
const skillMetadata=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            //frontend context or state
        },
        offering:{
            domain:{
                type:String,
                required:true,
                enum: ["Technology", "Mathematics", "Science", "History", "Literature", "Finance", "Art and Creativity", "Cooking", "Others"]
            },
            skills: [{
                type: String,
                required: true,
            }],
        },
        wanted:{    
            domain:{
                type:String,
                required:true,
                enum: ["Technology", "Mathematics", "Science", "History", "Literature", "Finance", "Art and Creativity", "Cooking", "Others"]
            },
            skills: [{
                type: String,
                required: true,
            }],
        },
        availability:{
            type:String,
            required:true,
        }
    }
)
module.exports=mongoose.model("skillMetadata",skillMetadata);