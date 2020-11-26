const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const curso = require('./curso.routes');
const alunoHardskills = require('./aluno_hardskills.routes');

module.exports = app =>{
    app.use('/api/usuario', usuario);
    app.use('/api/questao', questao);
    app.use('/api/hardskill', hardskill);
    app.use('/api/curso', curso);
    app.use('/api/aluno_hardskills', alunoHardskills);
}