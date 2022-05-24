const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const fileUpload = require("express-fileupload");
const todoRoute = require("./routes/approutes");
dotenv.config();

const port = process.env.PORT || 8080;
var mongoose=require("mongoose")
mongoose.connect("mongodb+srv://masoomaxt:masooma5530@cluster0.iq3es.mongodb.net/?retryWrites=true&w=majority", /*We place this to remove warning*/{ useNewUrlParser:
    true, useUnifiedTopology: true }).then(()=>{
    console.log("Connected to MongoDB database")
    }).catch((e)=>{console.log(e.message)})

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());

app.set("view engine", "ejs");
app.use("/api", approutes);
app.use('*',(req,res)=>{
    res.render('error');
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
