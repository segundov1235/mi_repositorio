/*
alert("hola!")


 let nombre = prompt ("ingrese su nombre")
 let apellido = prompt("ingrese su apellido")
 let edad = prompt("¿que edad tiene?")


 console.log(nombre)
 console.log(apellido)
 console.log(edad)

 let mensaje = prompt("¿que mensaje quiere enviar?")

 console.log(`${nombre} ${apellido} ${edad}`)



 let numero1 = Number(prompt("ingrese un numero"))
 let numero2 = Number(prompt("ingrese otro numero"))

 console.log(numero1 + numero2)
 console.log(numero1 - numero2)
 console.log(numero1 * numero2)
 console.log(numero1 / numero2)
 */




 //condicionales//
 
 /*   true 
 if(cindicion){         if= si
     sentencia
 } else if(condision 2){  else if = tambien
     sentencia 2        
}else {               else= si no
    

 }
 

 let frio = false;
 if(frio){
     console.log("hace frio, me tengo que poner un buzo");
 } else {
     console.log("no hace frio, no hace falta ponerme un buzo");
 }
 

//operadores de comparacion

asignar =

igual ==
distinto != 
mayor >
menor <
mayor igual >=
menor igual <=
estrictamente igual ===
estrictamente distinto !==

**comparadores compuestos
&& and y (las condiciones tienen que ser true si o si)
|| or o   ( almenos una condicion tiene que ser true)
! sino





  let edad = prompt("ingrese su edad")
  if(edad >= 18){
      console.log("podes ingresar al boliche");
  } else{
      console.log("no pasas, sos muy chico")
  }






let cont = "comision22405"
let pass = prompt("ingrsa tu contraseña")

if(pass === "coderhouse"){
    console.log("ahora sos admin del canal")
} else if(pass === cont){
    console.log("contraseña correcta")
}else{
    console.log("contraseña incorrecta")
}






let persona = "julian"
let edad =28

//            ( (true)   y     (true) ) = verdadero
if(persona === "julian" && edad === 28){
    console.log("hola julian")
}else{
    console.log("no te conozco")
}

//            ( (true)   y     (false) ) = falso
if(persona === "julian" && edad === 28){
    console.log("hola julian")
}else{
    console.log("no te conozco")
}


//primero que me verifiique el nombre 
//si ese nombre es correcto 
//va al ascensor y a su departamento

const nombrePersona1 ="julian"
const nombrePersona2 ="tomas"
const nombrePersona3 ="pedro"

let nombreDinamico = prompt("¿cual es tu nombre?")

/*if(nombreDinamico === nombrePersona1 || nombreDinamico === nombrePersona2 || nombreDinamico === nombrePersona3){
    console.log("puede pasar")
}else{
    console.log("no puede pasar")
}

//para pasar todo a minuscula
//para pasar todo a amayuscula

nombreDinamico = nombreDinamico.toLowerCase()

 if(nombreDinamico === nombrePersona1 || nombreDinamico === nombrePersona2 || nombreDinamico === nombrePersona3){
     console.log(`puede ingresar ${nombreDinamico}`)

     let depto = Number(prompt("¿a que piso vas?"))
     if(depto <= 3) {
         console.log("anda por el ascensor de la derecha")
     }else if(depto >= 7){
         console.log("anda por el ascensor de la izquierda")
     }else if(depto === 5){
        console.log(`${nombreDinamico} no sos de este piso, tomate el palo`)
     }else{
         console.log("espere que lo estan arreglando")
     }
 }else{
     console.log(`no puede ingresar, ${nombreDinamico} no esta en la lista` )
 }
*/

 
let numero = Number(prompt("escriba un numero"))
if(numero >= 1000){
    alert("es un numero muy grande")
}else{
    console.log("es un numero muy bello")
}
let palabra = prompt("escriba una palabra")
if(palabra === "hola"){
    alert("¡¡ERROR!!")
}else {
    console.log("esa respuesta esta mal, pero no tan mal")
}
let number = Number(prompt("escriba otro numero"))

if(number <=10){
    console.log("me gusta ese numero")
}else if(number >=50){
    console.log("me gusta ese numero")
}else{
    alert("¡numero incorrecto!")
}