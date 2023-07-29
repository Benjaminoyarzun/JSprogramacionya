//ejercicio 11

word = prompt('Ingrese alguna de estas palabras (casa, mesa, perro, gato) para traducirlas al ingles');
        switch (word) {
            case 'casa':
                document.write('house');
                break;
            case 'mesa':
                document.write('table');
                break;
            case 'perro':
                document.write('dog');
                break;
            case 'gato':
                document.write('cat');
                break;
            default:
                document.write('Introduzca una palabra valida, solo puedo traducir las palabras (casa. mesa, perro, gato)');
                break;
            }

document.write("<br>")
//ejercicio 12


let ref = 11;

let contserie1 = 1;

while (contserie1 <= 25) {
    document.write(ref);
    document.write('<br>');
    contserie1 = contserie1 + 1;
    ref = ref + 11;
}

document.write("<br>")


//ejercicio 13

//.1
let contalumnos = 0; 
let cantmayor = 0;
let cantmenor = 0;
        while (contalumnos < 10) {
            
            let nota = parseInt(prompt('Ingrese nota:'));
            if (nota >= 7) {
                cantmayor = cantmayor + 1;
            } else {
                cantmenor = cantmenor + 1;
            }
            contalumnos = contalumnos + 1;
        }
        document.write(`Cantidad de alumnos con notas mayores o iguales a 7: ${cantmayor}`);
        document.write('<br>');
        document.write(`Cantidad de alumnos con notas menores a 7: ${cantmenor}`);


document.write("<br>")

//.2        
let contalturas=0
let suma=0
while (contalturas<5){
    let altura= parseInt(prompt("Ingrese una altura en cm"))
    suma=suma+altura
    contalturas=contalturas+1
}

let promedio= suma/5 
document.write(`La altura promedio de las cinco personas es:${promedio}`);




document.write("<br>")


//.3

let contempleados=0
let sueldomayor=0
let sueldomenor=0
let gastoempresa=0
while (contempleados<5){
    let sueldo= parseInt(prompt("Ingrese el sueldo del empleado(min-100$ macontserie2-500$)"))
    gastoempresa=gastoempresa+sueldo

    if (sueldo<100||sueldo>500) {
        alert("Sueldo invalido")
        break
        
    }else if(sueldo>=100&& sueldo<=300){
        sueldomenor=sueldomenor+1

    } else sueldomayor=sueldomayor+1


    //suma=suma+altura
    contempleados=contempleados+1
}

document.write(`Hay ${sueldomenor} empleados cobrando entre 100$ y 300$, y hay ${sueldomayor} empleados cobrando mas de 300$`)
document.write("<br>")
document.write(`La empresa, gasta ${gastoempresa}$ en sueldos de empleados `)

document.write("<br>")


//.4

let ref2 = 5;
        let contserie2 = 0;
        while (contserie2 < 20) {
            document.write(ref2 + ' ');
            contserie2 = contserie2 + 1;
            ref2 = ref2 + 5;
        }

document.write("<br>")

//.5
let multiplo = 10;
        while (multiplo <= 1500) {
            document.write(multiplo + ' ');
            multiplo = multiplo + 10;
        }
document.write("<br>")

//.6
let total1 = 0;
let contlista = 0;
let nro;
while (contlista < 3) {
    nro = parseInt(prompt('Ingrese valor de la primer lista:'));
    total1 = total1 + nro;
    contlista = contlista + 1;
}
let total2 = 0;
contlista = 0;
while (contlista < 3) {
    nro = parseInt(prompt('Ingrese valor de la segunda lista:', ''));
    total2 = total2 + nro;
    contlista = contlista + 1;
}
if (total1 > total1) {
    document.write('Tiene mayor valor la lista1');
} else {
    if (total1 < total2) {
        document.write('Tiene mayor valor la lista2');
    } else {
        document.write('Tienen el mismo valor acumulado las dos listas');
    }
}





document.write("<br>")

//.7

let cantpares = 0;
let cantimpares = 0;
let contparimpar = 0;
let valor;
while (contparimpar < 5) {
  valor = parseInt(prompt("Ingrese un valor"));
  if (valor % 2 == 0) {
    cantpares = cantpares + 1;
  } else {
    cantimpares = cantimpares + 1;
  }
  contparimpar = contparimpar + 1;
}
document.write("Cantidad de valores pares ingresados:" + cantpares);
document.write("<br>");
document.write("Cantidad de valores impares ingresados:" + cantimpares);

document.write("<br>");
