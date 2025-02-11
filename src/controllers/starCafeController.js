const cafeLista = require('../models/starCafeModel');

const cafeLista = (req, res) => {
    res.json(cafeLista.listarCafes());
}

const adicionarCafe = (req, res) => {
    const { nome, tipo, preco } = req.body;
    if (!nome || !tipo || !preco) {
        res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        return;
    }
    const cafe = cafeLista.adicionarCafe(nome, tipo, preco);
    res.status(201).json(cafe);
};

const buscarCafe = (req, res) => {
    const cafe = cafeLista.buscarCafe(req.params.id);
    if (!cafe) {
        res.status(404).json({ message: 'Café não encontrado' });
        return;
    }
res.json(cafe);
}

const removerCafe = (req, res) => {
    const cafeRemovido = cafeLista.removerCafe(req.params.id);
    if (!cafeRemovido) {
        res.status(404).json({ message: 'Café não encontrado' });
        res.json({ message: 'Café removido com sucesso', cafeRemovido });
        
    }
}

module.exports = {cafeLista, adicionarCafe, buscarCafe, removerCafe};
