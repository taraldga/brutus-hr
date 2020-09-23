import express from 'express'
import bodyparser from 'body-parser';
import mongoose from 'mongoose'
import Employee from './Data/Employee'
import cors from'cors';

const app = express()
const mongoConnectionString = "mongodb://develop:dev_password@127.0.0.1/brutus-hr-database"
mongoose.connect(mongoConnectionString, {useNewUrlParser: true})


const PORT_NR = 3600

app.use(bodyparser.json());
app.use(cors())

app.listen(PORT_NR, () => {
    console.log(`The server is listening on portnr ${PORT_NR}`)
})

app.get("/employee", async (req, res) => {
  const limit = req.query.limit ? req.query.limit : 10;
  const query = req.query.query ? req.query.query : {};
  try {
    Employee.find(query).limit(+limit).exec((err, result) => {
      res.json(result)
    });
  } catch(e) {
    console.log(e)
    res.status(500).send()
  }
})

app.post("/employee", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save()
    res.status(201).send()
  } catch(e) {
    res.status(500).send()
  }
});


export default app
