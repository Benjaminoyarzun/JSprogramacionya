//ejercicio 16

function mostrarNumeros() {
    const menor = parseInt(prompt("Ingrese el número menor: "));
    const mayor = parseInt(prompt("Ingrese el número mayor: "));
  
    if (isNaN(menor) || isNaN(mayor)) {
      alert("Debe ingresar números válidos.");
      return;
    }
  
    if (menor > mayor) {
      alert("El número menor debe ser menor o igual al número mayor.");
      return;
    }
  
    let numeros = "";
    for (let i = menor; i <= mayor; i++) {
      numeros += i + " ";
    }
  
    alert("Los números desde el menor hasta el mayor son: " + numeros);
  }
  
 
  mostrarNumeros();

  document.write("<br>")


//17
//.1

function menorentre(a,b,c) {
    if (a<b&&a<c) {
        document.write(`El numero mas chico es ${a}`)
    } else if (b<c) {
        document.write(`El numero mas chico es ${b}`)
        
    } else document.write(`El numero mas chico es ${c}`)
}
menorentre(1,5,7)

document.write("<br>")


//.2

function mostrarOrdenados(d, e, f) {
    if (d < e && d < f) {
        document.write(d + ' ');
        if (e < f) {
            document.write(e + ' ' + f);
        } else {
            document.write(f + ' ' + e);
        }
    } else {
        if (e < f) {
            document.write(e + ' ');
            if (d < f) {
                document.write(d + ' ' + f);
            } else {
                document.write(f + ' ' + d);
            }
        } else {
            document.write(f + ' ');
            if (d < e) {
                document.write(d + ' ' + e);
            } else {
                document.write(e + ' ' + d);
            }
        }
    }
}


let valor1 = parseInt(prompt('Ingrese primer valor:'));
let valor2 = parseInt(prompt('Ingrese segundo valor:'));
let valor3 = parseInt(prompt('Ingrese tercer valor:'));
document.write('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
document.write('Los valores ordenados de menor a mayor son: ');
mostrarOrdenados(valor1, valor2, valor3);

document.write("<br>")


//ejercicio 18

//.1



function retornarMayor(g, h, i) {
    if (g > h && g > i) {
        return g;
    } else {
        if (h > i) {
            return h;
        } else {
            return i;
        }
    }
}

let valor4 = parseInt(prompt('Ingrese primer valor:'));
let valor5 = parseInt(prompt('Ingrese segundo valor:'));
let valor6 = parseInt(prompt('Ingrese tercer valor:'));
document.write('Los tres valores ingresados son ' + valor4 + ' ' + valor5 + ' ' + valor6 + '<br>');
let may = retornarMayor(valor4, valor5, valor6);
document.write('El mayor de los tres es :' + may);

document.write("<br>")

//.2



function retornarPerimetro(lado) {
    let perimetro;
    perimetro = lado * 4;
    return perimetro;
}

let lado = parseInt(prompt('Ingrese la medida del lado de un cuadrado:'));
document.write('El perímetro del cuadrado es:' + retornarPerimetro(lado));

document.write("<br>")

//.3


function cantidadDigitos(j) {
    if (j < 10) {
        return 1;
    } else {
        if (j < 100) {
            return 2;
        } else {
            if (j < 1000) {
                return 3;
            } else {
                if (j < 10000) {
                    return 4;
                } else {
                    if (j < 100000) {
                        return 5;
                    }
                }
            }
        }
    }
}

let valor = parseInt(prompt('Ingrese un valor positivo de hasta 5 dígitos:'));
document.write('La cantidad de dígitos del valor ingresado es:' + cantidadDigitos(valor));

document.write("<br>")

//.4


function promediar(x1, x2, x3) {
    let promedio = (x1 + x2 + x3) / 3;
    return promedio;
}

let val1 = parseInt(prompt('Ingrese primer valor:'));
let val2 = parseInt(prompt('Ingrese segundo valor:'));
let val3 = parseInt(prompt('Ingrese tercer valor:'));
document.write('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
let pro;
pro = promediar(val1, val2, val3);
document.write(`El promedio es : ${pro}`);
document.write("<br>")

//.5

function cargar5Valores() {
    let suma = 0;
    for (let f = 1; f <= 5; f++) {
        let valor = parseInt(prompt('Ingrese valor:'));
        suma = suma + valor;
    }
    return suma;
}

let s = cargar5Valores();
document.write(`La suma de los 5 valores es: ' + ${s}`);

document.write("<br>")

//ejercicio 20
//.1
let fecha
        fecha = new Date();
        let mes = fecha.getMonth();
        if (mes < 4) {
            document.write('Nos encontramos en el primer cuatrimestre del año');
        } else {
            if (mes < 8) {
                document.write('Nos encontramos en el segundo cuatrimestre del año');
            } else {
                document.write('Nos encontramos en el tercer cuatrimestre del año');
            }
        }



//.2


document.write("<br>")

function retornarDiaSemana(dia) {
    switch (dia) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Lunes';
        case 2:
            return 'Martes';
        case 3:
            return 'Miércoles';
        case 4:
            return 'Jueves';
        case 5:
            return 'Viernes';
        case 6:
            return 'Sábado';
        default:
            return 'día inválido';
    }
}

function retornarMes(mes) {
    switch (mes) {
        case 0:
            return 'Enero';
        case 1:
            return 'Febrero';
        case 2:
            return 'Marzo';
        case 3:
            return 'Abril';
        case 4:
            return 'Mayo';
        case 5:
            return 'Junio';
        case 6:
            return 'Julio';
        case 7:
            return 'Agosto';
        case 8:
            return 'Septiembre';
        case 9:
            return 'Octubre';
        case 10:
            return 'Noviembre';
        case 11:
            return 'Diciembre';
        default:
            return 'mes inválido';
    }
}


function retornarFechaTexto() {
    let fecha = new Date();
    let str = 'Hoy es ' + retornarDiaSemana(fecha.getDay()) + ' ' + fecha.getDate() + ' de ' +
        retornarMes(fecha.getMonth()) + ' de ' + fecha.getFullYear();
    return str;
}

document.write(retornarFechaTexto());