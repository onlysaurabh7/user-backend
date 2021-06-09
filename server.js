const express = require('express')
const app = express()
const Userroutes = require('./route/userRoute');
const jsonwebtoken = require("jsonwebtoken");
const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://dbuser:saurabh7121992@cluster0.kpfiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('connection successful');
}).catch((e) => {

  console.log('no connection');
})



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", Userroutes)




app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});


app.listen(3000);

console.log(' Server is running on port: ' + 3000);
