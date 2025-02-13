const cafeLista = require('../models/starCafeModel');

const iniciarCafes = () => {
    ListaStarCafe.adicionarCafe('Café Capuccino', 'Capuccino', 8.90);
    ListaStarCafe.adicionarCafe('Chocolate quente meio amargo', 'Leite e chocolate meio amargo', 7.00);
}


const cafeLista = (req, res) => {
    const cafes = cafeLista.listarCafes();
    res.json(cafes);
}

const adicionarCafe = (req, res) => {
    const { nome, valor, tipo } = req.body;
    const novoCafe = cafeLista.adicionarCafe(nome, tipo, valor);
    res.status(201).json(novoCafe);
};

const buscarCafePorId = (req, res) => {
    const {id} = req.params;
    const cafe = cafeLista.buscarCafePorId(id, 10);
    if (cafe) {
        res.json(cafe);
    } else {
        res.status(404).send('Café não encontrado');
    }
}

const removerCafe = (req, res) => {
    const {id} = req.params;
    const cafeRemovido = cafeLista.removerCafe(id);
    if (cafeRemovido) {
        res.json(cafeRemovido);
    } else {
        res.status(404).send('Café não encontrado');
    }
}

inicializarCafes();

module.exports = {
    cafeLista,
    adicionarCafe,
    buscarCafePorId,
    removerCafe
};