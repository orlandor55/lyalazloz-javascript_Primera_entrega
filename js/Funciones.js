import { Medidor_de_Volumen } from "./Medidores.js";
import * as Funciones from "./Funciones.js"

// const mililitros = new Medidor_de_Volumen("mililitros", 1);
// const litros = new Medidor_de_Volumen("litros", 1000,);
// const tazas = new Medidor_de_Volumen("tazas", 250);
// const cucharadas = new Medidor_de_Volumen("cucharadas", 15);


// funciones para ordenar arrays de objetos de la clase Medidor

function comparar_base(a, b) {
    return a.medida_base - b.medida_base;
}

function comparar_uni_medida(a, b) {
    if (a.unidad_medida > b.unidad_medida) {
        return 1;
    }
    if (a.unidad_medida < b.unidad_medida) {
        return -1;
    }
    return 0;
}

function lista_de_Medidores
let unidades_de_volumen = [];

unidades_de_volumen.push(mililitros, litros, tazas, cucharadas);

// Array ordenado por el valor 
let u_VolumenOrdenado = unidades_de_volumen.sort(Funciones.comparar_base);
console.log(u_VolumenOrdenado);

// Aplico del método convertirBase a cada elemento del array

let convertirBase = unidades_de_volumen.map(function(unidad_de_volumen){
    console.log("1 "+ unidad_de_volumen.obtener_nombre_medida + " equivale a "+ (unidad_de_volumen.convertirBase()) + " " + unidad_de_volumen.obtener_nombre_medida_base);
})

export function transformacion(medida_ini, medida_fin, valor){

    let medida_ini =prompt("¿que desea transformar? (medida actual) \nLitros        Mililitros \nTazas         Cucharadas")
    let medida_fin =prompt("¿que desea recibir?) (medida final) \nLitros        Mililitros \nTazas         Cucharadas")
    let valor =parseFloat(prompt("ingrese en valor que a transformar"))

    this.medida_ini = medida_ini.toLowerCase();
    this.medida_fin = medida_fin.toLowerCase();

    let Objeto1 = unidades_de_volumen.map(function(unidad_de_volumen){
        if (unidad_de_volumen.obtener_nombre_medida == this.medida_ini){
           this.medida_ini = unidad_de_volumen;                 
        }
    })
    
    let Objeto2 = unidades_de_volumen.map(function(unidad_de_volumen){
        if (unidad_de_volumen.obtener_nombre_medida == this.medida_fin){
            this.medida_fin = unidad_de_volumen;               
        }
    })

    let convertido = this.medida_ini.convertir_a(this.medida_fin, valor);

    return (valor +" " + medida_ini.obtener_nombre_medida + " equivale(n) a " + convertido + " " + medida_fin.obtener_nombre_medida)
}


