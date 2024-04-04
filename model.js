const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://abhijiths4ct2:abhijith@cluster0.ao3aqac.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const EmployeeSchema = new mongoschema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})

var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel