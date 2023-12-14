import User from "../models/UserSchema.js";
export const updateUser=async(req,res)=>{
    const id=req.params.id;
    try{
  const updateUser= await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
res.json({success:true,message:'Successfully updated',data:updateUser})
    }catch{
        res.json({success:false,message:'failed to update'})

    }

}
export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    try{
 await User.findByIdAndDelete(id)
res.json({success:true,message:'Successfully delete'})
    }catch{
        res.json({success:false,message:'failed to delete'})

    }

}
export const getSingleUser=async(req,res)=>{
    const id=req.params.id;
    try{
const user= await User.findById(id).select("-password")
res.json({success:true,message:'user found',data:user})
    }catch{
        res.json({success:false,message:'no user found'})

    }

}
export const getAllUser=async(req,res)=>{
    try{
const users= await User.find({}).select("-password")
res.json({success:true,message:'users found',data:users})
    }catch{
        res.json({success:false,message:'not found'})

    }

}
