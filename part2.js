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

document.write("<br>")
//2.
const nota1=parseInt(prompt("Ingrese la primer nota: " ))
const nota2=parseInt(prompt("Ingrese la segunda nota: " ))
const nota3=parseInt(prompt("Ingrese la tercer nota: " ))
const promedio=(nota1+nota2+nota3)/3
if (promedio>=4) {
    document.write(`Segun las notas ingresadas, el promedio es ${promedio}, por lo que estarias regular`)
} else {
    document.write(`Segun las notas ingresadas, el promedio es ${promedio}, por lo que estarias reprobado`)    
}

document.write("<br>")

//3.

const positivenum=parseInt(prompt("Ingresa un numero positivo de uno o 2 digitos"))

if (positivenum<10) {
    document.write(`Tu numero ingresado (${positivenum}) tiene 1 digito`)
} else document.write(`El numero ingresado(${positivenum}) tiene 2 digitos`)


document.write("<br>")



//ejercicio 8

//.1

const num1 =parseInt(prompt("Ingrese el primer numero a comparar: "))
const num2 =parseInt(prompt("Ingrese el segundo numero a comparar: "))
const num3 =parseInt(prompt("Ingrese el tercer numero a comparar: "))


if (num1>num2& num1>num3) {
  document.write(`El numero mas grande ingresado es ${num1}`)

} else if (num2>num1&num2>num3) {
    document.write (`El numero mas grande ingresado es ${num2}`)

} else document.write(`El numero mas grande ingresado es ${num3}`)
document.write("<br>")

//.2

const intnum=parseInt(prompt("Ingrese un numero para catalogar su signo:"))
if (intnum>0) {
    document.write(`El valor ingresado(${intnum}) es positivo`)
} else if (intnum==0) {
    document.write(`El numero ingresado(${intnum}) es cero`)
} else document.write(`El valor ingresado(${intnum}) es menor a cero`)



document.write("<br>")

//.3

const ciphernum=parseInt(prompt("Ingrese un numero, para determinar sus cifras:"))
if (ciphernum<10) {
    document.write(`El numero ingresado (${ciphernum}) tiene 1 cifra`)
} else if (ciphernum>=10 & ciphernum<100) { 
    document.write(`El numero ingresado (${ciphernum}) tiene 2 cifras`)
} else document.write(`El numero ingresado (${ciphernum}) tiene 3 cifras`)
 

document.write("<br>")

//.4
const name=prompt("Ingresa el nombre de un empleado: ")
const question=parseInt(prompt("Cuantas preguntas se le realizaron a ese candidato?: "))
const rightanswers=parseInt(prompt("Respuestas correctas: "))
const porcentaje=rightanswers / question * 100
if (porcentaje >= 90) {
    document.write('Nivel superior');
} else {
    if (porcentaje >= 75) {
        document.write('Nivel medio');
    } else {
        if (porcentaje >= 50) {
            document.write('Nivel regular');
        } else {
            document.write('Fuera de nivel');
        }
    }
}




document.write("<br>")


//ejercicio 9

//.1

const dia=parseInt(prompt("Ingrese el dia(numero): "))
const mes=parseInt(prompt("Ingrese el mes(numero): "))
const año=parseInt(prompt("Ingrese el año(numero): "))

 

if (dia==25 & mes==12) {
    document.write(`La fecha ingresada corresponde a la navidad de ${año}`)
} else document.write(`La fecha ingresada (${dia}/${mes}) no corresponde a navidad`)
document.write("<br>")


//.2

const val1=parseInt(prompt("Ingresa un numero: "))
const val2=parseInt(prompt("Ingresa otro numero: "))
const val3=parseInt(prompt("Ingresa el ultimo numero: "))

if (val1==val2 & val1==val3) {
   const sumequals=val1+val2
    document.write(`La suma de los primeros 2 valores es igual a ${sumequals}`)
    document.write("<br>")
    const equalsproduct= sumequals*val3
    document.write(`El resultado del producto de esta suma con el tercer valor es igual a ${equalsproduct}`)
} 


document.write("<br>")

//.3


const number1=parseInt(prompt("Ingrese un numero: "))
const number2=parseInt(prompt("Ingrese otro numero: "))
const number3=parseInt(prompt("Ingrese el ultimo numero: "))


if (number1<10 & number2<10 & number3<10) {
document.write("Todos los numeros ingresados son menores a diez")
    
}
document.write("<br>")

//.4

const x = parseInt(prompt('Ingrese coordenada x'));
const y = parseInt(prompt('Ingrese coordenada y'));
        if (x > 0 && y > 0) {
            document.write('Se encuentra en el primer cuadrante');
        } else {
            if (x < 0 && y > 0) {
                document.write('Se encuentra en el segundo cuadrante');
            } else {
                if (x < 0 && y < 0) {
                    document.write('Se encuentra en el tercer cuadrante');
                } else {
                    if (x > 0 && y < 0) {
                        document.write('Se encuentra en el cuarto cuadrante');
                    } else {
                        document.write('Se encuentra sobre un eje');
                    }
                }
            }
        }