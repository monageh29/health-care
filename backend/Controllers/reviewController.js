import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";
// getAllReviews
export const getAllReviews=async (req,res)=>{
    try{
const reviews=await Review.find({})
res.json({success:true,message:"successful",data:reviews})
    }catch{
        res.json({success:false,message:"Notfound"})

    }
}

// create review
export const createReview=async(req,res)=>{
    if(!req.body.doctor) req.body.doctor=req.params.doctorId
    if(!req.body.user) req.body.user=req.userId

const newReview= new Review(req.body)
    try{
const savedReview=await newReview.save()
await Doctor.findByIdAndUpdate(req.body.doctor,{
    $push:{reviews : savedReview._id},
})
res.json({success:true,message:"review Submitted",data:savedReview})
    }catch(err){
        res.json({success:false ,message:err.message})

    }
}
