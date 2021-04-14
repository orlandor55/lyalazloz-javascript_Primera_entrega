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

