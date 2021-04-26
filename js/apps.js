import * as Funciones from "./Funciones.js"

// /Funciones.resultado()

// let boton = document.getElementById("btnConvertir")
// boton.addEventListener("click", Funciones.clear())


// //CODIGO HTML DE REFERENCIA
// <input id = "nombre" type="text">
// <input id = "edad"   type="number">
// //CODIGO JS/



// let lista = document.getElementById("lista_medida_ini");

// // Obtener el valor de la opción seleccionada
// let valorSeleccionado = lista_medida_ini.options[lista.selectedIndex].value;

// Obtener el texto que muestra la opción seleccionada
// let valorSeleccionado = lista1.medida_ini[lista1.selectedIndex].text;

// console.log (valorSeleccionado)

// Obtener el valor de la opción seleccionada
//var valorSeleccionado = lista.options[lista.selectedIndex].value;

// function consola(){
//     console.log(valorSeleccionado)
// }

// lista.addEventListener("change", consola() )


const medida_ini_html = document.querySelector('#medida_ini');
const medida_fin_html = document.querySelector('#medida_fin');

medida_ini_html.addEventListener('change', (event) => {
    const resultado = document.querySelector('.resultado');
    resultado.textContent = `medida_ini_html ${event.target.value}`;
    console.log  (event.target.value)
});

medida_fin_html.addEventListener('change', (event) => {
    const resultado = document.querySelector('.resultado2');
    resultado.textContent = `medida_fin_html ${event.target.value}`;
    console.log (event.target.value)
});









