import mongoose from "mongoose"
const mongoURL="mongodb+srv://altamash:altamash1234@clustervox.9rzedsl.mongodb.net/voxcart"
const connectDB=()=>{
    return mongoose.connect(mongoURL);
    
}
export default connectDB