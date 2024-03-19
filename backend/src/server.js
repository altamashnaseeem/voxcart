import app from "./index.js"
import connectDB from "./config/db.js"
const PORT=3434;

app.listen(PORT,async()=>{
    await connectDB();
    
    console.log("server is listen at port:",PORT)

})
