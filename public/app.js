
const nombre = "raul";
const apellido = "melo"
const correo = "raul@gmail.com"
const contrasena = 12345;



let resgist = document.getElementById("registrar");

resgist.addEventListener("click", function (event) {
    event.preventDefault();
    let name = document.getElementById("nombres")
    let lastname = document.getElementById("apellidos")
    let mail = document.getElementById("correo")
    let contrasen = document.getElementById("pass")
    console.log(name.value, lastname.value, mail.value, contrasen.value)

    if (name.value.toLowerCase() == nombre && lastname.value.toLowerCase() == apellido && mail.value == correo && contrasen.value == contrasena) {
        window.open("admin","_self","")
    }else{
        window.alert("datos incorrectos");
         document.getElementById("nombres").value=""
        document.getElementById("apellidos").value=""
         document.getElementById("correo").value=""
        document.getElementById("pass").value=""
    }
})




 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 
 btn.onclick = function () {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function () {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }


