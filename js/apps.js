class Medidor {

    constructor(unidad_medida, valor_medida, medida_base, unidad_medida_base) {
        this.unidad_medida  = unidad_medida.toLowerCase();
        this.valor_medida = parseFloat(valor_medida);
        this.medida_base = parseFloat(medida_base);
        this.unidad_medida_base = unidad_medida_base.toLowerCase();
        this.convertirBase = function () {
            console.log
            if (this.unidad_medida == unidad_medida_base) {
               console.log(this.valor_medida + ' ' + this.unidad_medida +' ' + 'equivalen a: ' + this.valor_medida + ' ' + this.unidad_medida_base);
            } 
            else {
                console.log(this.valor_medida + ' ' + this.unidad_medida +' ' + 'equivalen a: ' + (this.valor_medida * this.medida_base)+ ' ' + this.unidad_medida_base);
            }   
        }
    }
}
// Instancio los objetos

const mililitros = new Medidor("mililitros", 1, 1, 'mililitros');
const litros = new Medidor("litros", 1, 1000, 'mililitros');
const tazas = new Medidor("tazas", 1, 250, 'mililitros');
const cucharadas = new Medidor("cucharadas", 1, 15, 'mililitros');

//Incorporación de array
let unidades_de_volumen = []


unidades_de_volumen.push(mililitros, litros, tazas, cucharadas);


console.log(unidades_de_volumen) 

// Aplico del método convertirBase a cada elemento del array

let convertirBase = unidades_de_volumen.map(function(unidad_de_volumen){
    console.log(unidad_de_volumen.convertirBase());
})

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
let u_VolumenOrdenado2 = unidades_de_volumen.sort(); /* <== Elegir una función e incluir como parámetro
                                                        (comparar_base, comparar_uni_medida)*/
console.log(u_VolumenOrdenado2);