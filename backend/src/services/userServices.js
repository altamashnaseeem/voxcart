import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { generateToken, getUserIdFromToken } from "../config/jwtProvider.js";

export const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("user already exist with email:", email);
    }
    password = await bcryptjs.hash(password, 8);
    const user = await User.create({ firstName, lastName, email, password });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

//find user by id

export const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
    if (!user) {
      throw new Error("user not found");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserByEmail=async(email)=>{
  try{
    const user=await User.findOne({email})
    if(!user){
      throw new Error("user not found with email :",email)

    }
    return user;

  }catch(err){
    throw new Error(err.message)
  }
}
export const getUserProfileByToken = async (token) => {
  try {
    const userId = getUserIdFromToken(token);
    const user = await findUserById(userId);

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};
