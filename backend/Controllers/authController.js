import User from "../models/UserSchema.js"
import Doctor from"../models/DoctorSchema.js"
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs"
const generateToken=user=>{
return Jwt.sign({id:user._id ,role:user.role},process.env.JWT_SECERET_KEY,{
    expiresIn:"15d",
})


}
export const Register= async(req,res)=>{
    const{email,password,name,role}=req.body;

try{
let user = null
if(role==='patient'){
    user= await User.findOne({email})
}else if(role==='doctor'){
    user= await Doctor.findOne({email})
}
// check if email exist
if(user){
    return res.json({message:'User already exist'})
}
//hash password
let salt = await bcrypt.genSalt(10)
const hashPassword= await bcrypt.hash(password,salt) 
if(role==='patient'){
    user=new User({
        name,
        email,
        password:hashPassword,
        role
    })
}
if(role==='doctor'){
    user=new Doctor({
        name,
        email,
        password:hashPassword,
        role
    })
}
await user.save();
res.json({success:true,  message:"user succesfully created"})
}catch(err){
    res.json({success:false,  message:"Internal server error , Try again "})

}
};


export const Login= async (req,res)=>{
    const{email}=req.body;

try{
let user=null;
const patient=await User.findOne({email})
const doctor=await Doctor.findOne({email})
if(patient){
    user=patient
}
if(doctor){
    user=doctor}
    // check if user exist 
if(!user){
    return res.json({message:'User not found'})
}

// compare password
const isPasswordMatch=await bcrypt.compare(req.body.password,user.password)
if(!isPasswordMatch){
    return res.json({status:false, message:'Invalid password'})
}

//gettoken
const token= generateToken(user)
const{password,role,appointments,  ...rest}=user._doc
return res.json({status:true, message:'Successfully Login',data:{...rest},token,role})

}catch{}
return res.json({status:false, message:'failed to login'})

    };