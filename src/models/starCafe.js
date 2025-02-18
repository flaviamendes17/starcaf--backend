class Cafe {
    constructor (id, nome, valor, tipo) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.tipo = tipo;
    }
}

class ListaStarCafe {
    constructor() {
        this.cafes = [];
    }

    adicionarCafe(nome, tipo, valor) {
        const novoCafe = { id: this.cafes.length + 1, nome, tipo, valor };
        this.cafes.push(novoCafe);
        return novoCafe;
    }

    listarCafes() {
        return this.cafes;
    }

    buscarCafePorId(id) {
        return this.cafes.find(cafe => cafe.id === id);
    }

    removerCafe(id) {
        const index = this.cafes.findIndex(cafe => cafe.id === id);
        if (index !== -1) {
            return this.cafes.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new ListaStarCafe();