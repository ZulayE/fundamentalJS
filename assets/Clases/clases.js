/*class perro{
    constructor(nombre){
        this.nombre=nombre;
    }
    //Método
    hablar(){
        document.writeln(this.nombre + ' ladra');
    }
}
let mascota_1=new perro('Pancho');
mascota_1.hablar(); // Pancho ladra
document.writeln('</br>');
let mascota_2=new perro('Kikita');
mascota_2.hablar(); // Kikita ladra

*/

class perro{
    constructor(nombre){
        this.nombre=nombre;
    }
    //Método
    alimentar(){
        document.writeln('Hola soy ' + this.nombre + ' gracias por alimentarme');
    }
}
let mascota_1=new perro('Pancho');
mascota_1.alimentar(); // Pancho ladra
document.writeln('</br>');
let mascota_2=new perro('Kikita');
mascota_2.alimentar(); // Kikita ladra