class Cafe {
    constructor (id, nome, valor, tipo) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.tipo = tipo;
    }
}

class cafeLista {
    constructor() {
        this.cafes = [];
        this.proximoId = 1;
    }

    adicionarCafe(nome, valor, tipo) {
        const novoCafe = new Cafe(this.proximoId++, nome, valor, tipo);
        this.cafes.push(novoCafe);
        return novoCafe;
    }

    listarCafes() {
        return this.cafes;
    }

    buscarCafePorId(id) {
        return this.cafes.find((cafe) => cafe.id === id);
    }

    removerCafe(id) {
        const index = this.cafes.findIndex((cafe) => cafe.id === id);
        if (index === -1) {
            return null;
        }
    }
}



module.exports = new cafeLista();