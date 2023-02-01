/*
const type_payment = 'cash'
switch (type_payment){
    case 'cash':
        document.writeln('Tipo de pago con efectivo')
        break;
    case 'cc':
        document.writeln('Tipo de pago con efectivo')
        break;
    default:
        document.write("Sin tipo de pago")
        break; 
} */

//switch con edades
let edad=  prompt('Cual es su edad?');
edad= Number(edad)
switch(edad){
    case(0):
    document.writeln('Tas recien nacido')
    break;
    case(18):
    document.writeln('Ya eres adulto')
    break;
    case(65):
    document.writeln('Edad de juvilacion')
    break;
    default:
        document.writeln('Edad no es correcta')

}