import express from 'express'
import bodyparser from 'body-parser';
import mongoose from 'mongoose'
import Employee from './Data/Employee'

const app = express()
const mongoConnectionString = "mongodb://develop:dev_password@127.0.0.1/brutus-hr-database"
mongoose.connect(mongoConnectionString, {useNewUrlParser: true})


const PORT_NR = 3600

app.use(bodyparser.json());

app.listen(PORT_NR, () => {
    console.log(`The server is listening on portnr ${PORT_NR}`)
})


app.get("/employee", async (req, res) => {
  try {
    const allResults = await Employee.find();
    res.json(allResults)
  } catch(e) {
    console.log(e)
    res.status(500).send()
  }
})

app.post("/employee", async (req, res) => {
  console.log(req.body)
  try {
    const newEmployee = new Employee(req.body);
    newEmployee.save()
    res.status(201).send()
  } catch(e) {
    res.status(500).send()
  }
});


export default app
