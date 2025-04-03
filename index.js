const express = require("express");
const mysql = require("mysql"); 
const app = express();

let conexion = mysql.createConnection({
    host:"localhost",
    database:"chandososconestilo",
    user:"root",
    password:""
});

app.set("view engine","ejs");



app.use(express.urlencoded({extended:false}));
app.use(express.json());


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


app.post("/validar", function(req, res){

    const datos=req.body
    let cedula=datos.ide
    let nombre1=datos.nombre1
    let nombre2=datos.nombre2
    let apellido1=datos.apellido1
    let apellido2=datos.apellido2
    let cel= datos.celular
    let tel= datos.telefono
    let direccion = datos.direccion


    let buscar ="SELECT*FROM employes WHERE cedula ="+cedula+"";
    
    conexion.query(buscar,function(err,row){
        if (err) {
            throw err
        }else if(row.length>0){
            console.log("cedula ya registrada")
        }else{
            
            let registrar = "INSERT INTO `employes`(`cedula`, `nombre1`, `nombre2`, `apellido1`, `apellido2`, `cel`, `tel`, `direccion`) VALUES ('"+cedula+"','"+nombre1+"','"+nombre2+"','"+apellido1+"','"+apellido2+"','"+cel+"','"+tel+"','"+direccion+"')"

            conexion.query(registrar, function(err){
                if (err) {
                    throw err
                }else{
                    console.log("datos guardados con exito!")
                }
            })
        }

    })
    
})




app.use(express.static("public"));

app.listen(3000, function(){
    console.log("servidor creado http://localhost:3000");
});