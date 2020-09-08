const livroRotas = require('./livros-rotas');
const baseRotas = require('./base-rotas');

module.exports = (app) => {
    baseRotas(app);
    livroRotas(app);
};