const express = require("express");
const app = express();
app.set("view engine","ejs");




app.get("/",function (req,res) {
    res.render("index.ejs");
    
});


app.get("/admin",function (req,res) {
    res.render("admin.ejs");
    
});

app.get("/servicios",function (req,res) {
    res.render("servicios.ejs");
    
});


app.get("/registro",function (req,res) {
    res.render("registro.ejs");
    
});

app.get("/nosotros",function (req,res) {
    res.render("nosotros.ejs");
    
});

app.get("/crud",function (req,res) {
    res.render("crud.ejs");
    
});





app.use(express.static("public"));

app.listen(3000, function(){
    console.log("servidor creado http://localhost:3000");
});