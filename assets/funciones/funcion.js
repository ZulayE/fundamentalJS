
// funcion Saludar
/*function saludar(){
    document.writeln('Saludar')
}

saludar();


// funcion pedir nombre
function saludar_nombre(nombre){
    document.writeln('hola '+ nombre+', como estas')
}

//llamar una funcion
saludar_nombre();

//funcion de flecha

let saludar_flecha=(nombre) =>{
    document.writeln('</br>')
    Document.writeln('Saludar desde la funcion de la flecha,' + nombre)
}
saludar_flecha('zulay');*/

//ejercicio hora
let  fecha=new Date();
let hora=fecha.getHours()
function valida_hora(hora){
    if(hora<=5){
        document.writeln('Buenos madrugadas')
    }else if(hora>5 && hora <12){
        document.writeln('Buenos días')
    }else{
        document.writeln('Buenas noches')
    }
}

valida_hora()

