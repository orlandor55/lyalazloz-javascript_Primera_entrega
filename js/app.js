import { Medidor_de_Volumen } from "./Medidores.js";

const mililitros = new Medidor_de_Volumen("mililitros", 1);
const litros = new Medidor_de_Volumen("litros", 1000,);
const tazas = new Medidor_de_Volumen("tazas", 250);
const cucharadas = new Medidor_de_Volumen("cucharadas", 15);

//Incorporación de array
let unidades_de_volumen = []

unidades_de_volumen.push(mililitros, litros, tazas, cucharadas);

//Ordenar arrays con criterio de ordenamiento dado por parámetro:

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

// Array ordenado por el valor 
let u_VolumenOrdenado2 = unidades_de_volumen.sort(comparar_base);
console.log(u_VolumenOrdenado2);

// Aplico del método convertirBase a cada elemento del array

let convertirBase = unidades_de_volumen.map(function(unidad_de_volumen){
    console.log("1 "+ unidad_de_volumen.obtener_unidad_medida + " equivale a "+ (unidad_de_volumen.convertirBase()) + " " + unidad_de_volumen.obtener_unidad_medida_base);
})

let medida_ini =prompt("¿que desea transformar? (medida actual) \nLitros        Mililitros \nTazas         Cucharadas")
let medida_fin =prompt("¿que desea recibir?) (medida final) \nLitros        Mililitros \nTazas         Cucharadas")
let valor =parseFloat(prompt("ingrese en valor que a transformar"))

medida_ini = medida_ini.toLowerCase()
medida_fin = medida_fin.toLowerCase()

//me gustaria hacer esto:
console.log(litros.convertir_a(tazas,8))
console.log(valor +" litros equivale a "+ litros.convertir_a(tazas, valor))

///)
console.log ("esta salida solo estara 'correcta' si se quiere transformar de litros a tazas (no al reves, ni otras medidas:\n" + valor + " " + medida_ini + " equivalen a " + litros.convertir_a(tazas, valor) + " " + medida_fin)
///pero en estas partes medida_ini y litros.convertir_a(tazas,) la variable medida_ini llamara al objeto1 con su mismo nombre y en litros.convertir la parte de litros fuera llamado un objeto2 con el mismo nombre y no ingresarlo manualmente... como no logre hacerlo entrego esto que funciona, pero no creo que sea la mejor manera de hacerlo (mas abajo te dejo comentado algunas cosas que intente para mejorarlo)


if(medida_ini == litros.obtener_unidad_medida && medida_fin == tazas.obtener_unidad_medida){
    alert(valor + ' litro(s) equivale a ' + valor * 1000 / unidades_de_volumen[2].medida_base + ' tazas')
}else if(medida_ini == litros.obtener_unidad_medida && medida_fin == cucharadas.obtener_unidad_medida){
    alert(valor + ' litro(s) equivale a ' + valor * 1000 / unidades_de_volumen[1].medida_base + ' cucharadas')
}else if(medida_ini == litros.obtener_unidad_medida && medida_fin == mililitros.obtener_unidad_medida){
    alert(valor + ' litro(s) equivale a ' + valor * 1000 / unidades_de_volumen[0].medida_base + ' mililitros')
}else if(medida_ini == litros.obtener_unidad_medida && medida_fin == litros.obtener_unidad_medida){
    alert(valor + ' litro(s) equivale a ' + valor + ' litros')
}

else if(medida_ini == tazas.obtener_unidad_medida && medida_fin == litros.obtener_unidad_medida){
    alert(valor + ' taza(s) equivale a ' + valor / 1000 * unidades_de_volumen[2].medida_base + ' litros')
}else if(medida_ini == tazas.obtener_unidad_medida && medida_fin == mililitros.obtener_unidad_medida){
    alert(valor + ' taza(s) equivale a ' + valor * unidades_de_volumen[2].medida_base + ' mililitros')
}else if(medida_ini == tazas.obtener_unidad_medida && medida_fin == cucharadas.obtener_unidad_medida){
    alert(valor + ' taza(s) equivale a ' + valor * 250 / unidades_de_volumen[1].medida_base + ' cucharadas')
}else if(medida_ini == tazas.obtener_unidad_medida && medida_fin == tazas.obtener_unidad_medida){
    alert(valor + ' taza(s) equivale a ' + valor  + ' tazas')
}


else if(medida_ini == cucharadas.obtener_unidad_medida && medida_fin == mililitros.obtener_unidad_medida){
    alert(valor + ' cucharada(s) equivale a ' + valor * unidades_de_volumen[1].medida_base + ' mililitros')
}else if(medida_ini == cucharadas.obtener_unidad_medida && medida_fin == litros.obtener_unidad_medida){
    alert(valor + ' cucharada(s) equivale a ' + valor * 15 / unidades_de_volumen[3].medida_base + ' litros')
}else if(medida_ini == cucharadas.obtener_unidad_medida && medida_fin == tazas.obtener_unidad_medida){
    alert(valor + ' cucharada(s) equivale a ' + valor * 15 / unidades_de_volumen[2].medida_base + ' tazas')
}else if(medida_ini == cucharadas.obtener_unidad_medida && medida_fin == cucharadas.obtener_unidad_medida){
    alert(valor + ' cucharada(s) equivale a ' + valor  + ' cucharadas')
}

else if(medida_ini == mililitros.obtener_unidad_medida && medida_fin == mililitros.obtener_unidad_medida){
    alert(valor + ' mililitro(s) equivale a ' + valor + ' mililitros')
}else if(medida_ini == mililitros.obtener_unidad_medida && medida_fin == litros.obtener_unidad_medida){
    alert(valor + ' mililitro(s) equivale a ' + valor / unidades_de_volumen[3].medida_base + ' litros')
}else if(medida_ini == mililitros.obtener_unidad_medida && medida_fin == tazas.obtener_unidad_medida){
    alert(valor + ' mililitro(s) equivale a ' + valor / unidades_de_volumen[2].medida_base + ' tazas')
}else if(medida_ini == mililitros.obtener_unidad_medida && medida_fin == cucharadas.obtener_unidad_medida){
    alert(valor + ' mililitro(s) equivale a ' + valor / unidades_de_volumen[1].medida_base + ' cucharadas')
}


// =================================

///***"convertir_a" con map*** cada variable me devuelve un array con cada elemento del mismo transformado a una medida especifica, pero no supe extraer el las propiedades especificas que queria 

// let convertirMililitros = convertirBase

// let convertirCucharadas = unidades_de_volumen.map(function(unidad_de_volumen){
//     console.log("1 " + unidad_de_volumen.obtener_unidad_medida + " equivale a "+ (unidad_de_volumen.convertir_a(cucharadas, 1)) + " cucharadas" );
// })

// let convertirTazas = unidades_de_volumen.map(function(unidad_de_volumen){
//     console.log("1 " + unidad_de_volumen.obtener_unidad_medida + " equivale a "+ (unidad_de_volumen.convertir_a(tazas, 1)) + " tazas" );
// })

// let convertirLitros = unidades_de_volumen.map(function(unidad_de_volumen){
//     console.log("1 " + unidad_de_volumen.obtener_unidad_medida + " equivale a "+ (unidad_de_volumen.convertir_a(litros, 1)) + " litros" );
// })
///===============================
//**funcion fallida que quedo trabada */

// function (medida_ini, medida_fin, valor) {
//     if (this.medida_ini == Medidor_Volumen.obtener_obtener_unidad_medida )
// }

///==================================
///***intento fallido, insisto en que creo que no deberia escribir manualmente las medidas */

// if(medida_ini == litros.obtener_unidad_medida && medida_fin == tazas.obtener_unidad_medida){
//     alert(litros.convertir_a(tazas, valor))
// }else if(medida_ini == tazas.obtener_unidad_medida && medida_fin == litros.obtener_unidad_medida){
//     alert(tazas.convertir_a(litros, valor))
// }
// 
/// esta vez quise dejar mis intentos fallidos y mostrartelos, para que veas mas o menos lo que estuve pensando y si hubo alguno cerca de lograrlo me ayudes a finalizarlo de manera funcional

