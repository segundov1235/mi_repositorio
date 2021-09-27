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
//_______________________________________________________________________________________________________

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
 
//_______________________________________________________________________________________________________
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
*/
//___________________________________________________________________________________________________________
//ciclos / bucles
//ciclo por conteo
/*
if(condicion){sentencia}
fot(inicio, condicion, iteracion){sentencia}
/*let numero = 0
for(0; numero < 10; numero = numero + 1){
    console.log("hola mundo")
}
//numero = i

for(let i = 0; i < 10; i++){
    console.log(i)
}

// si la condicion es true me ejecuta el codigo


//cuando le sumamos 1 a un numero lo podemos resumir como ++
//cuando le restamos 1 a un numero lo pedemos resumir como --

//ciclo por condicion

while(condicion verdadero){
    me ejecuta la sentencia
}

    let num=0
while(num < 10){
    console.log(`estoy dentro de un bucle while ${num}`)
    num++
}
 do{
    sentencia
 } while(condicion)


 let num = 0

do{
    console.log("hola mundo")
    num++
}while(num < 10)
*/




/*
numero 0 -> ejecuta for -> hola mmundo -> numero +1
numero 1 -> ejecuta for -> hola mmundo -> numero +1
numero 2 -> ejecuta for -> hola mmundo -> numero +1
numero 3 .......
numero 10 
*/
/*let num = Number( prompt("ingrese su numero"))

for(let i = 1; i <= num; i ++) {
    //modulo %
    //en caso de que sean pares
    if(i%2 == 0){
        console.log("este numero es par" +i)
    }else{
        console.log("este numero es impar" +i);
    }
    
}
*/ 
/*let num = Number(prompt("ingrese su numero"))
for(let i = 1; i <= num; i++){
    console.log(i)
    if (i==5){
        break
    }
    
}
*/

//continue
/*
me frena la iteracion pero el ciclo continua
//break
me frena el ciclo
*/

//switch
 /*let num = Number(prompt ("num"))
switch(num){
    case 3:
        console.log("el numero ingresado es 3")
        break
    case 5:
        console.log("el numero ingresado es 5")
        break
    case 7:
        console.log("el numero ingresado es 7")
        break
    default:
        console.log("el numero ingresado no me gusta")
        break
        
}
*/

/*
let pass = 22405
let dato = Number(prompt("ingresa tu contraseña"))
let intentos = 5

while(dato != pass && intentos > 0){
    alert(`contraseña incorrecta, te quedan ${intentos} intentos`);
    intentos--
    dato = Number(prompt("ingrese su contraseña"));

    let validar = confirm("¿desea cambiar la contraseña?")

    if(validar){
        let passOld = prompt("ingrese contraseña vieja")
        if(passOld == pass){
            pass = Number(prompt("ingrese su nueva contraseña"))
        }
    }
}
*/

let pass = 123456
let dato = Number(prompt("ingresa tu contraseña"))
let intentos = 10

while(dato != pass && intentos > 0){
    alert(`contraseña incorrecta, te quedan ${intentos} intentos`);
    intentos--
    dato = Number(prompt("ingrese su contraseña"));

    
}