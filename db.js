const mongoose = require("mongoose")
// const url = "mongodb://localhost:27017/jwtData"
const url = "mongodb+srv://kp_13:kuj166@cluster0.nckbm.mongodb.net/jwtData?retryWrites=true&w=majority"
mongoose.connect(url)