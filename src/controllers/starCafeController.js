const cafeLista = require('../models/starCafeModel');

const iniciarCafes = () => {
    ListaStarCafe.adicionarCafe('Café Capuccino', 'Capuccino', 8.90);
    ListaStarCafe.adicionarCafe('Chocolate quente meio amargo', 'Leite e chocolate meio amargo', 7.00);
}


const listarCafes = (req, res) => {
    res.json(cafeLista.listarCafes());
};

const adicionarCafe = (req, res) => {
    const { nome, valor, tipo } = req.body;
    if (!nome || !valor || !tipo) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    const novoCafe = cafeLista.adicionarCafe(nome, valor, tipo);
    res.status(201).json(novoCafe);
};

const buscarCafePorId = (req, res) => {
    const { id } = req.params;
    const cafe = cafeLista.buscarCafePorId(parseInt(id));
    if (!cafe) {
        return res.status(404).json({ message: 'Café não encontrado' });
    }
    res.json(cafe);
};

const removerCafe = (req, res) => {
    const { id } = req.params;
    const cafeRemovido = cafeLista.removerCafe(parseInt(id));
    if (!cafeRemovido) {
        return res.status(404).json({ message: 'Café não encontrado' });
    }
    res.json({ message: 'Café removido com sucesso', cafeRemovido });
};

iniciarCafes();

module.exports = {
    listarCafes,
    adicionarCafe,
    buscarCafePorId,
    removerCafe
};