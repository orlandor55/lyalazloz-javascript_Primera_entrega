import { Medidor_de_Volumen } from "./Medidores.js";

const mililitros = new Medidor_de_Volumen("mililitros", 1);
const litros = new Medidor_de_Volumen("litros", 1000,);
const tazas = new Medidor_de_Volumen("tazas", 250);
const cucharadas = new Medidor_de_Volumen("cucharadas", 15);

let unidades_de_volumen = [];

unidades_de_volumen.push(mililitros, litros, tazas, cucharadas);

let convertirBase = unidades_de_volumen.map(function(unidad_de_volumen){
    console.log("1 "+ unidad_de_volumen.obtener_nombre_medida + " equivale a "+ (unidad_de_volumen.convertirBase()) + " " + unidad_de_volumen.obtener_nombre_medida_base);
})

export function capturar_datos(){

    let medida_ini =prompt("¿que desea transformar? (medida actual) \nLitros        Mililitros \nTazas         Cucharadas")
    let medida_fin =prompt("¿que desea recibir?) (medida final) \nLitros        Mililitros \nTazas         Cucharadas")
    let valor =parseFloat(prompt("ingrese el valor que desea transformar"))

    medida_ini = medida_ini.toLowerCase();
    medida_fin = medida_fin.toLowerCase();

    let Objeto1 = unidades_de_volumen.map(function(unidad_de_volumen){
        if (unidad_de_volumen.obtener_nombre_medida == medida_ini){
            medida_ini = unidad_de_volumen;                 
        }
    })

    let Objeto2 = unidades_de_volumen.map(function(unidad_de_volumen){
        if (unidad_de_volumen.obtener_nombre_medida == medida_fin){
            medida_fin = unidad_de_volumen;               
        }
    })

    let convertido = (valor +" " + medida_ini.obtener_nombre_medida + " equivale(n) a " + medida_ini.convertir_a(medida_fin, valor) + " " + medida_fin.obtener_nombre_medida);

    return (convertido)
}


