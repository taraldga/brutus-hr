import mongoose from 'mongoose';



const EmployeeSchema = new mongoose.Schema({
  first_name: {type: String},
  last_name: String,
  age: {type: Number},
  street: String,
  city: String,
  state: String,
  latitude: Number,
  longitude: Number,
  ccnumber: Number
});

EmployeeSchema.index({"age":1})

const EmployeeModel = mongoose.model('Employee', EmployeeSchema)

export default EmployeeModel;