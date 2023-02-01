/*
let calificacion=7
if (calificacion>=7){
    console.log('Aprobado!')
    document.writeln('Aprobaste con ' + calificacion)
}  */


//let ingresos=1245
//let ret = prompt('Indique cuanto dinero desea retirar (usted cuenta con $'+ingresos+')');

/* if (Number(ret)<=ingresos){
    document.writeln('Al hacerlo le quedarian $' + (ingresos-ret))
}  
else{document.writeln('No es posible debido a que usted cuenta con $' + (ingresos))}
*/
//con el metodo operador terneario

/*
Number(ret)<=ingresos?
 document.writeln('Al hacerlo le quedarian $' + (ingresos-ret)):
 document.writeln('No es posible debido a que usted cuenta con $' + (ingresos))
 ;
console.log('elvisLives')

if (dinero<retirar){
    document.writeln('No es posible debido a que usted cuenta con $' + (ingresos))
}else if(retirar>200 && retirar<=5000){
    document.writeln('Al hacerlo le quedarian $' + (ingresos-ret))
}else if( retirar>=5000){
    document.writeln('No es posible retirar mas de 5000 diarios')
}
*/

//Ejercicio promedio
let prom = prompt('Indique cual es su calificacion (numero entre 0-10)');
prom = Number(prom)
if (prom>0 && prom<6){
    document.writeln('Reprobado')
}else if (prom>=6 && prom<8){
    document.writeln('Aprobado con condicional')
}else if (prom>=8 && prom<=10){
    document.writeln('Aprobado')
}else{
    document.writeln('Calificacion NO valida')
}