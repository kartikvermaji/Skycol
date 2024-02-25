// import bcrypt from "bcrypt"
import argon2 from "argon2"
import jwt from "jsonwebtoken";
import USERS from "../Models/userModel.js";


//Register User
export const Register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      location,
      occupation,
    } = req.body;
    // const salt=await bcrypt.genSalt();
    // const hashedPassword= await bcrypt.hash(password,salt);
    const hashedPassword = await argon2.hash(password);
    const newUser=new USERS({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        // password,
        picturePath,
        location,
        occupation
    })
    const savedUser=await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//Login User

export const Login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await USERS.findOne({email:email});
        if(!user){return res.status(404).json({message:"User Not Found"})}

        
        // const match=await bcrypt.compare(password,user.password);
        const match = await argon2.verify(user.password,password);
        if(!match){ return res.status(400).json({ msg: "Invalid credentials." })}
        

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
        delete user.password
        res.status(200).json({ token, user });
    }catch (err) {
    res.status(500).json({ errors: err.message });
  }
}
