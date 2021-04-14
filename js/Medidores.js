
class Medidor {

    constructor(unidad_medida, medida_base) {
        this.unidad_medida  = unidad_medida;
        this.valor_medida = 1;
        this.medida_base = parseFloat(medida_base);
        this.unidad_medida_base = " ";
    }

    get obtener_unidad_medida() {
        return this.unidad_medida;
    }

    get obtener_valor_medida() {
        return this.valor_medida;
    }

    set cambiar_valor_medida(nuevo_valor_medida) {
        this.valor_medida = nuevo_valor_medida;
    }

    get obtener_medida_base() {
        return this.medida_base;
    }

    get obtener_unidad_medida_base() {
        return this.unidad_medida_base;
    } 
    
    convertirBase(unidad_medida, valor_medida) {       
        if (this.unidad_medida == this.unidad_medida_base) {
            let base = this.valor_medida
           return  base 
        } 
        else {
            let base = this.valor_medida * this.medida_base;
            return base
        }
    }
    convertir_a (medida_fin, valor) {
        let medida_ini = this.obtener_unidad_medida
        let transformacion = ((this.convertirBase (medida_ini) / medida_fin.convertirBase())) * valor
        return transformacion
    }
    
}



export class Medidor_de_Volumen extends Medidor {
    constructor(unidad_medida, valor_medida, medida_base) {
        super(unidad_medida, valor_medida,medida_base);
        this.unidad_medida_base = "mililitros"
    }
}

export class Medidor_de_Peso extends Medidor {
    constructor(unidad_medida, valor_medida, medida_base) {
        super(unidad_medida, valor_medida,medida_base);
        this.unidad_medida_base = "miligramos"
    }
}

export class Medidor_de_Temperatura extends Medidor {
    constructor(unidad_medida, valor_medida, medida_base) {
        super(unidad_medida, valor_medida,medida_base);
        this.unidad_medida_base = "centígrados"
    }
}

