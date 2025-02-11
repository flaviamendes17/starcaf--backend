const Cafe = require('./starCafe')

class CafeLista {
    constructor () {
        this.cafes = [];
        this.proximoId = 1;
    }

    adicionarCafe (nome, valor, tipo) {
        const cafe = new Cafe(this.proximoId++, nome, valor, tipo);
        this.cafes.push(cafe);
        this.proximoId++;
    }

    listarCafes () {
        return this.cafes;
    }

    buscarCafePorId (id) {
        return this.cafes.find(cafe => cafe.id === id);
    }

    removerCafe (id) {
    const index = this.cafes.findIndex(cafe => cafe.id === id);
    if (index !== -1) {
        return this.cafes.splice(index, 1)[0];
    }
    return null;
    }
}

module.exports = new CafeLista();


