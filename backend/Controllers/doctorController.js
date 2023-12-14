import Doctor from "../models/DoctorSchema.js";
export const updateDoctor=async(req,res)=>{
    const id=req.params.id;
    try{
  const updateDoctor= await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true})
res.json({success:true,message:'Successfully updated',data:updateDoctor})
    }catch{
        res.json({success:false,message:'failed to update'})

    }

}
export const deleteDoctor=async(req,res)=>{
    const id=req.params.id;
    try{
 await Doctor.findByIdAndDelete(id)
res.json({success:true,message:'Successfully delete'})
    }catch{
        res.json({success:false,message:'failed to delete'})

    }

}
export const getSingleDoctor=async(req,res)=>{
    const id=req.params.id;
    try{
const doctor= await Doctor.findById(id).populate("reviews").select("-password")
res.json({success:true,message:'user found',data:doctor})
    }catch{
        res.json({success:false,message:'no user found'})

    }

}
export const getAllDoctor=async(req,res)=>{

    try{
        const {query}=req.query;
        let doctors;
        if(query){
            doctors=await Doctor.find({
                isApproved:"approved",
                $or:[
                    {name:{$regex:query,$options:"i"}},
                {specialization:{$regex:query,$options:"i"}}
                ],
            }).select("-password")
        }else{
             doctors= await Doctor.find({isApproved:"approved"}).select("-password")

        }
res.json({success:true,message:'users found',data:doctors})
    }catch{
        res.json({success:false,message:'not found'})

    }

}