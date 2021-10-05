/*
let num1 = Number(prompt("Ingrese edad de empleado"))
let num2 = Number(prompt("Ingrese edad de otro empleado"))
let num3 = Number(prompt("Ingrese edad de otro empleado"))
let num4 = Number(prompt("Ingrese edad de otro empleado"))
let num5 = Number(prompt("Ingrese edad de otro empleado"))

let num6 = promedio(num1, num2, num3, num4, num5)

console.log(num6)
alert(`El promedio de edad de sus empleados es: ${num6}`)

function promedio(a,b,c,d,e){
    let resultado = (a+b+c+d+e) / 5;
    return resultado
}
*/


//OBJETOS
//objeto literal
//las claves de un objeto se llaman propiedades // importante 2 puntos y no igual
/*
let segundo = {
    nombre: "segundo",
    apellido:"vallejos",
    edad:24,
    lenguajeFavorito: "js",
    casaPropia: false,
}
console.log(segundo);

console.log(segundo.apellido);


function Personas(nombre, apellido, edad, lf){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.lf = lf;
}
const segundo = new Personas("segundo","vallejos",24,"js")
const pedro = new Personas("pedro","picapiedra",50,"js")
const carlos = new Personas("carlos","menem",80,"js")
const juan = new Personas("juan","garcia",28,"js")
const jose = new Personas("jose","perez",38,"js")

console.log(segundo)
*/
// para funcion
/*
function Personas(nombre, apellido, edad, lf){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.lf = lf;
}

Personas.prototype.hablar = function(){
    console.log(`hola mi nombre es ${this.nombre}`);
}

const segundo = new Personas("segundo","vallejos",24,"js")
console.log(segundo.hablar());

*/
/*//// codigo para acomodar alfabeticamente_________________________
listasupermercado.sort((a,b)=>{
    if (a.nombre > b.nombre){
        return 1
    }
    if(a.nombre < b.nombre){
        return -1
    }
    return 0

})
____________________________________________________________________
*/
/*
class Personas {

    constructor(nombre, apellido, edad, lf, experiencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.lf = lf;
        this.experiencia = experiencia
    }
    hablar() {
        console.log(`hola mi nombre es ${this.nombre}`);
    }
    caminar(){
        console.log(`hoy camine ${this.edad * 10} metros`)
    }
    entrenar(time){
        let tiempo = time *10
        this.experiencia += tiempo
        console.log(`ganaste ${tiempo} de experiencia`)
    }
}

let persona1 = new Personas("segundo","vallejos",24,"js",0)

const parche = () => {
    if(persona1.experiencia >= 50000){
        console.log("estas roto")
    }
}


persona1.hablar()
persona1.caminar()
persona1.entrenar(50)


///ecomerse

class Productos{

    constructor(nombrePP,categoriaPP,precioPP,stokcPP,validoPP){
        this.nombre = nombrePP,
        this.categoria = categoriaPP
        this.precio = precioPP
        this.stock = stokcPP
        this.disponible = validoPP
    }
    comprar(cantidad){
        if(this.stock <= 0){
            console.log("no podes comprar");
            this.disponible = false
        }else{this.stock = this.stock - cantidad
        console.log
    }
        
    }
}
const producto1 = new Productos("remera","nike", 3000, 10, true)
const producto2 = new Productos("pantalon","nike", 4000, 20, true)
const producto3 = new Productos("buzo","nike", 5000, 10, true)
const producto4 = new Productos("gorra","nike", 1500, 15, true)
*/


/*
class Bebidas{
    constructor(nombre,marca,modelo,medida,precio,stock,disponible){
        this.nombre = nombre,
        this.marca = marca,
        this.modelo = modelo
        this.medida = medida,
        this.precio = precio,
        this.stock = stock,
        this.disponible = disponible
    }
    comprar(cantidad){
        if(this.stock == 0){
            console.log("No hay mas");
            this.disponible = false
        }else{this.stock = this.stock - cantidad
            console.log(`compraste ${cantidad} ${this.nombre}/s de la marca ${this.marca} de ${this.medida}, te costo $${this.precio * cantidad}. `)
            alert(`compraste ${cantidad} ${this.nombre}/s de la marca ${this.marca} de ${this.medida}, te costo $${this.precio * cantidad}. `)
    }
    }
    
}
const producto1 = new Bebidas("Whisky","Johnnie Walker","Red label","750ml",1800,50,true )
const producto2 = new Bebidas("Whisky","Johnnie Walker","Black label","750ml",3600,40,true )
const producto3 = new Bebidas("Whisky","Jack Daniel`s","Old No 7","750ml",4500,45,true )
const producto4 = new Bebidas("Whisky","Jack Daniel`s","Tennessee Honey","750ml",4600,30,true )
const producto5 = new Bebidas("Cerveza","Stella Artois","Belgium","1L",280,100,true )
const producto6 = new Bebidas("Cerveza","Stella Artois","Belgium","473ml",150,250,true )
const producto7 = new Bebidas("Cerveza","Stella Artois","Noire","1L",250,50,true )
const producto8 = new Bebidas("Cerveza","Quilmes","Original","1L",200,150,true )
const producto9 = new Bebidas("Cerveza","Quilmes","Original","473ml",140,250,true )
const producto10 = new Bebidas("Cerveza","Brahma","Chopp","1L",260,150,true )
const producto11 = new Bebidas("Cerveza","Brahma","Chopp","473ml",150,250,true )
*/

//___________________________________________//////ARRAYS//////_____________________________________________________
/*
//               0         1      2   3     4     5                     6                     7
let lista = ["persona","mascota",24,1000, true, false,{nombre:"segundo",apellido:"pereyra"},[1,2]
]
 for(let i = 0; i < lista.length; i++){
     console.log(lista[i])
 } 


 */
//push()          para agregar un elmemento a mi lista
/*
let ferreteria=["tornillos","madera","clavos"]
let supermercado=["huevo","leche","pan","harina","queso" 
]
console.log(supermercado)

supermercado.push("sal")//agregar//
console.log(supermercado)

supermercado.push("chocolate")
console.log(supermercado)


supermercado.unshift("tomate")//agregar y colocar al principio//
console.log(supermercado)

supermercado[2]="jamon"//cambiar uno por otro//

supermercado.sort()//ordenar alfabeticamente//
console.log(supermercado)

let listaDefinitiva = supermercado.concat(ferreteria)//unir las listas//
console.log(listaDefinitiva)

let listaReducida = listaDefinitiva.slice(2,5)//recortar las listas//
console.log(listaReducida)
*/

/*
class Producto{
    constructor(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    }
}
let listasupermercado=[];

listasupermercado.push(new Producto("tornillo",1300))
listasupermercado.push(new Producto("pera",50))
listasupermercado.push(new Producto("banana",130))
listasupermercado.push(new Producto("auto",1300000))
listasupermercado.push(new Producto("auto",1300000))
listasupermercado.push(new Producto("auto",1300000))
listasupermercado.push(new Producto("auto",1300000))
listasupermercado.push(new Producto("remera",1300))
listasupermercado.push(new Producto("camioneta",5000000))
listasupermercado.push(new Producto("pajaro",100000000000000))
listasupermercado.push(new Producto("pantalon",1300))

const agregarProductosALaLista = () =>{
    let nombre = prompt("nombre del producto")
    let precio = Number (prompt("precio del producto"))

    let producto= new Producto(nombre,precio)

    listasupermercado.push(producto)
}

listasupermercado.sort((a,b)=>{
    if (a.nombre > b.nombre){
        return 1
    }
    if(a.nombre < b.nombre){
        return -1
    }
    return 0

})

console.log(listasupermercado);

//_____________________________________METODOS PARA RECORRER UN ARRAY DE OBJETOS____________________________________________
/*
//FOR T
for (let i = 0; i < listasupermercado.length; i++){
    console.log(listasupermercado[i])
}

//FOR OF
for(const obj of listasupermercado){
    console.log(obj)
}
let obje ={nombre:"tomate",precio:200}

//FOR IN 
for(const prop in obje){
    console.log(prop)
}
*/
//FOREACH()
/*
listasupermercado.forEach(obj => {
    console.log(obj.precio)
})
/*
//FIND me trae 1 objeto
let search = prompt("que queres buscar")
let buscadorUnico = listasupermercado.find(obj=> obj.nombre === search)
console.log(buscadorUnico)
*/
//FILTER me trae una coleccion de objetos
/*
let search = prompt("que queres buscar")
let buscadorMultiple = listasupermercado.filter(obj=> obj.nombre === search)
console.log(buscadorMultiple)
*/
class Bebidas{
    constructor(nombre,marca,modelo,medida,precio,stock){
        this.nombre = nombre,
        this.marca = marca,
        this.modelo = modelo,
        this.medida = medida,
        this.precio = precio,
        this.stock = stock
        
    }

    
    
}
let listaBebidas=[];



listaBebidas.push(new Bebidas("Whisky","Johnnie Walker","Red label","750ml",1800,50,true))
listaBebidas.push(new Bebidas("Whisky","Johnnie Walker","Black label","750ml",3600,40,true))
listaBebidas.push(new Bebidas("Whisky","Jack Daniel`s","Old No 7","750ml",4500,45,true ))
listaBebidas.push(new Bebidas("Whisky","Jack Daniel`s","Tennessee Honey","750ml",4600,30,true))
listaBebidas.push(new Bebidas("Cerveza","Stella Artois","Belgium","1L",280,100,true))
listaBebidas.push(new Bebidas("Cerveza","Stella Artois","Belgium","473ml",150,250,true))
listaBebidas.push(new Bebidas("Cerveza","Stella Artois","Noire","1L",250,50,true))
listaBebidas.push(new Bebidas("Cerveza","Quilmes","Original","1L",200,150,true))
listaBebidas.push(new Bebidas("Cerveza","Quilmes","Original","473ml",140,250,true))
listaBebidas.push(new Bebidas("Cerveza","Brahma","Chopp","1L",260,150,true))
listaBebidas.push(new Bebidas("Cerveza","Brahma","Chopp","473ml",150,250,true))


const agregarBebidasALaLista = () =>{
    let nombre = prompt("Nombre del producto");
    let marca = prompt("marca del producto")
    let modelo = prompt("modelo del producto");
    let medida = prompt("medida del producto");
    let precio = Number (prompt("Precio del producto"));
    let stock = Number(prompt("cantidad total"));
    

    let producto= new Bebidas(nombre,marca,modelo,medida,precio,stock,)

    listaBebidas.push(producto)
    
}

listaBebidas.sort((a,b)=>{
    if (a.nombre > b.nombre){
        return 1
    }
    if(a.nombre < b.nombre){
        return -1
    }
    return 0

})

console.log(listaBebidas);




    


