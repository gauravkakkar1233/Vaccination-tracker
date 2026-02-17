import mongoose from "mongoose";

const vaccineSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    },
    vaccineName:{
        type:String,
        required:true,
        unique:true
    },
    scheduledDate:{
        type:Date,
    },
    reminder:{
        type:Boolean,
        default:false
    },
    completed:{
        type:Boolean,
        default:false
    },
    adminApproval:{
        type:Boolean,
        default:false
    }
    

})

const Vaccine = mongoose.model("Vaccine",vaccineSchema)

export default Vaccine