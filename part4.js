//ejercicio 14
//.1

let valor;
let suma = 0;
do {
  valor = parseInt(prompt("Ingrese un valor (9999 para finalizar))"));
  if (valor != 9999) {
    suma = suma + valor;
  }
} while (valor != 9999);
document.write("Valor acumulado total:" + suma);
document.write("<br>");
if (suma > 0) {
  document.write("El valor acumulado es mayor a cero");
} else {
  if (suma == 0) {
    document.write("El valor acumulado es cero");
  } else {
    document.write("El valor acumulado es menor a cero");
  }
}
document.write("<br>")
//.2

let nrocuenta;
        let nombreclient;
        let saldo = 0;
        let saldoacreedor = 0;
        do {
            nrocuenta = parseInt(prompt('Ingrese nro de cuenta:'));
            if (nrocuenta >= 0) {
                nombreclient = prompt('Nombre del cliente:');
                saldo = parseFloat(prompt('Saldo actual:'));
                if (saldo > 0) {
                    saldoacreedor = saldoacreedor + saldo;
                    document.write(nombreclient + ' tiene saldo acreedor<br>');
                } else {
                    if (saldo < 0) {
                        document.write(nombreclient + ' tiene saldo deudor<br>');
                    } else {
                        document.write(nombreclient + ' tiene saldo nulo<br>');
                    }
                }

            }
        } while (nrocuenta > 0);
        document.write('Suma total de saldos acreedores:' + saldoacreedor);

document.write("<br>")


//.3

let documento;
        let edad;
        let totalpersonas = 0;
        let cantvarones = 0;
        let cantmujeres = 0;
        let cantvaronesmayores = 0;
        do {
            documento = parseInt(prompt('Ingrese nro de documento (0 para finalizar):'));
            if (documento > 0) {
                edad = parseInt(prompt('Ingrese la edad:'));
                sexo = prompt('Ingrese el sexo (masculino/femenino):');
                if (sexo == 'masculino') {
                    cantvarones = cantvarones + 1;
                    if (edad >= 16 && edad <= 65) {
                        cantvaronesmayores = cantvaronesmayores + 1;
                    }
                }
                if (sexo == 'femenino') {
                    cantmujeres = cantmujeres + 1;
                }
                totalpersonas = totalpersonas + 1;
            }
        } while (documento != 0);
        document.write('Total de personas censadas: ' + totalpersonas + '<br>');
        document.write('Cantidad de varones: ' + cantvarones + '<br>');
        document.write('Cantidad de mujeres: ' + cantmujeres + '<br>');
        document.write('Cantidad de varones entre 16 y 65 años: ' + cantvaronesmayores + '<br>');


document.write("<br>")


//ejercicio 15
//.1
let conta1 = 0;
        for (let f = 1; f <= 3; f++) {
            let base = parseInt(prompt('Ingrese la base:'));
            let altura = parseInt(prompt('Ingrese la altura:'));
            let superficie = base * altura / 2;
            if (superficie > 12) {
                conta1++;
            }
            document.write('Triángulo nro:' + f + '<br>');
            document.write('Base:' + base + '<br>');
            document.write('Altura:' + altura + '<br>');
            document.write('Superficie:' + superficie + '<br>');
        }
        document.write('Cantidad de triángulos con superficie mayor a 12:' + conta1);
document.write("<br>")

//.2

let sumatenvals = 0;
for (let f = 1; f <= 10; f++) {
    let valor = parseInt(prompt('Ingrese un nro:'));
    if (f > 5) {
        sumatenvals = sumatenvals + valor;
    }
}
document.write('La suma de los últimos cinco valores ingresados es:' + suma);
document.write("<br>")


//.3

let tabla = 5;
        for (let f = 1; f <= 10; f++) {
            document.write(tabla + '-');
            // tabla = tabla + 5;
        }
document.write("<br>")

//.4


let tablamulti = parseInt(prompt('Ingrese un valor del 1 al 10:', ''));
        let conta = tablamulti;
        for (let f = 1; f <= 12; f++) {
            document.write(conta + ' ');
            conta = conta + tablamulti;
        }

document.write("<br>")

//5 

let cant1 = 0;
        let cant2 = 0;
        let cant3 = 0;
        for (let f = 1; f <= 4; f++) {
            let lado1 = parseInt(prompt('Ingrese primer lado:'));
            let lado2 = parseInt(prompt('Ingrese segundo lado:'));
            let lado3 = parseInt(prompt('Ingrese tercer lado:'));
            if (lado1 == lado2 && lado1 == lado3) {
                document.write('Triángulo equilatero.<br>');
                cant1++;
            } else {
                if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
                    document.write('Triángulo isósceles.<br>');
                    cant2++;
                } else {
                    document.write('Triángulo escaleno.<br>');
                    cant3++;
                }
            }
        }
        document.write('<br>');
        document.write('Cantidad de triángulos equiláteros:' + cant1 + '<br>');
        document.write('Cantidad de triángulos isósceles:' + cant2 + '<br>');
        document.write('Cantidad de triángulos escalenos:' + cant3 + '<br>');
        if (cant1 < cant2 && cant1 < cant3) {
            document.write('Se ingresaron menos triángulos equiláteros');
        } else {
            if (cant2 < cant3) {
                document.write('Se ingresaron menos triángulos isósceles');
            } else {
                document.write('Se ingresaron menos triángulos escalenos');
            }
        }
document.write("<br>")


//.6


let cuad1 = 0;
let cuad2 = 0;
let cuad3 = 0;
let cuad4 = 0;
let cant = parseInt(prompt("Cuantos puntos procesará:"));
cant = parseInt(cant);
for (let f = 1; f <= cant; f++) {
  let x = parseInt(prompt("Ingrese coordenada x:"));
  let y = parseInt(prompt("Ingrese coordenada y:"));
  if (x > 0 && y > 0) {
    cuad1++;
  } else {
    if (x < 0 && y > 0) {
      cuad2++;
    } else {
      if (x < 0 && y < 0) {
        cuad3++;
      } else {
        if (x > 0 && y < 0) {
          cuad4++;
        }
      }
    }
  }
}
document.write(
  `Cantidad de puntos ingresados en el primer cuadrante: ${cuad1} `
);
document.write("<br>")

document.write(
  `Cantidad de puntos ingresados en el segundo cuadrante: ${cuad2} `
);
document.write("<br>")
document.write("<br>")

document.write(
  `Cantidad de puntos ingresados en el tercer cuadrante:  ${cuad3} `
);
document.write("<br>")

document.write(
  `Cantidad de puntos ingresados en el cuarto cuadrante:  ${cuad4}  `
);

document.write("<br>")

//.7


let cantnegativos = 0;
let cantpositivos = 0;
let mult15 = 0;
let sumapares = 0;
for (let f = 1; f <= 10; f++) {
    let valor = parseInt(prompt('Ingrese un valor:'));
    if (valor < 0) {
        cantnegativos++;
    } else {
        if (valor > 0) {
            cantpositivos++;
        }
    }
    if (valor % 15 == 0 && valor != 0) {
        mult15++;
    }
    if (valor % 2 == 0) {
        sumapares = sumapares + valor;
    }
}
document.write(`Cantidad de valores negativos:' ${cantnegativos}`);
document.write("<br>")

document.write(`Cantidad de valores positivos:' + ${cantpositivos}` );
document.write("<br>")

document.write(`Cantidad de múltiplos de 15:'  ${mult15}`);
document.write("<br>")

document.write('Suma de los valores pares ingresados:' + sumapares + '<br>');


document.write("<br>")

//.8

let suma1 = 0;
for (let f = 1; f <= 5; f++) {
  let edad = parseInt(prompt("Edad de estudiante del turno mañana:"));
  suma1 = suma1 + edad;
}
let suma2 = 0;
for (let f = 1; f <= 6; f++) {
  let edad = parseInt(prompt("Edad de estudiante del turno tarde:"));
  suma2 = suma2 + edad;
}
let suma3 = 0;
for (let f = 1; f <= 11; f++) {
  let edad = parseInt(prompt("Edad de estudiante del turno noche:"));
  suma3 = suma3 + edad;
}
let promedio1 = suma1 / 5;
let promedio2 = suma2 / 6;
let promedio3 = suma3 / 11;
document.write(
  `Promedio de edades de alumnos del turno mañana: ${promedio1} `
);
document.write("<br>")

document.write(
  `Promedio de edades de alumnos del turno tarde: ${promedio2}`
);
document.write("<br>")

document.write(
  `Promedio de edades de alumnos del turno noche:  ${promedio3}` 
);
if (promedio1 > promedio2 && promedio1 > promedio3) {
  document.write("El turno mañana tiene un promedio mayor de edades");
} else {
  if (promedio2 > promedio3) {
    document.write("El turno tarde tiene un promedio mayor de edades");
  } else {
    document.write("El turno noche tiene un promedio mayor de edades");
  }
}