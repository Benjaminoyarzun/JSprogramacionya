//ejercicio 7

//1.

const n1=parseInt(prompt("Ingrese el primer numero: "))
const n2=parseInt(prompt("Ingrese el segundo numero: "))
const suma= n1+n2
const diferencia = Math.abs(n1 - n2);
const product=n1*n2
const division=n1/n2
if (n1>n2) {
    document.write (`La suma de los valores es de ${suma} y la diferencia entre estos valores es de ${diferencia} valores`)

    
} else {
    document.write (`La division de ambos valores es igual a ${division} y su producto es ${product}`)
    
}
