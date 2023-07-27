//Ejercicio 1

document.write("Mi nombre es Benjamin Oyarzun")

document.write("<br>")
//ejercicio 2

const employee="Pepe"

const salary= 150000
document.write(`${employee} es el empleado del mes, y gana ${salary}$ al mes`)


//ejercicio 3

document.write("<br>")
//ejercicio 4


const loginname=prompt("Ingrese su nombre: ")
const loginmail=prompt("Ingrese su mail: ")

document.write(`El usuario "${loginname}" tiene el mail ${loginmail}`)


document.write("<br>")
//ejercicio 5

//.1
const sqrside=parseInt(prompt("Ingrese el valor en cm del lado de un cuadrado: "))

const sqrperimeter=sqrside*4

document.write(`En base al valor de tu lado, el perimetro de tu cuadrado es de ${sqrperimeter}`)

//.2 y 3
const n1= parseInt(prompt("Ingrese el primer numero: "))
const n2= parseInt(prompt("Ingrese el segundo numero: "))
const n3= parseInt(prompt("Ingrese el tercer numero: "))
const n4= parseInt(prompt("Ingrese el cuarto numero: "))
const val1= parseInt(prompt("Ingrese el primer valor : "))
const val2= parseInt(prompt("Ingrese el segundo valor  : "))
const val3= parseInt(prompt("Ingrese el tercer valor : "))
const val4= parseInt(prompt("Ingrese el cuarto valor : "))


const sum=n1+n2
const product=n3*n4
const producttotal=val1*val2*val3*val4
document.write("<br>")
document.write(`Segun la consigna, el valor de la suma de los primeros 2 numeros, es igual a ${sum} y el producto de los ultimos 2 es igual a ${product}`)
document.write("<br>")
document.write(`En base a los valores ingresados, el producto final de estos 4 es ${producttotal}`)
document.write("<br>")



//.4

const precio= parseInt(prompt("Ingrese un precio de producto: "))
const cantidad= parseInt(prompt("Cuantas unidades de este producto lleva: "))
const carttotal=precio*cantidad
document.write(`El total a pagar es de ${carttotal}`)

//ejercicio 6
document.write("<br>")
//1.

const nota1=parseInt(prompt('Ingrese la primer nota: ',''));
const nota2=parseInt(prompt('Ingrese la segunda nota: ',''));
const nota3=parseInt(prompt('Ingrese la tercer nota: ',''));
 
const sumaprom=nota1+nota2+nota3

if (sumaprom>=7) {
    document.write("Segun tu nota, posees los requisitos para ser promocionado")

}
document.write("<br>")
//2.
const clave1=prompt("Ingrese una clave: ")
const clave2=prompt("Confirme su clave: ")

if (clave1==clave2) {
    document.write("La clave fue verificada correctamente")
} else document.write("Fracaso la verificacion")

