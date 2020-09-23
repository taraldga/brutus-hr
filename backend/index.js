import express from 'express'

const app = express()

const PORT_NR = 3600

app.listen(PORT_NR, () => {
    console.log(`The server is listening on portnr ${PORT_NR}`)
})


app.get("/hello", (req, res) => {
  res.json({"Hello":  "world"})
})


// app.post("/hr")