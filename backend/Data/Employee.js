import mongoose from 'mongoose';



const EmployeeSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: String,
  street: String,
  city: String,
  state: String,
  latitude: String,
  longitude: String,
  ccnumber: String
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema)

export default EmployeeModel;