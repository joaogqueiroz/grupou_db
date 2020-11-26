const models= require('../db/models');

//index GET ALL
//show GET BY ID
//store POST
//update UPDATE
//destroy DELETE

exports.index = async() =>{
    const resultado = await models.aluno.findAll({
        include:['cursos']
    });
    return resultado;
}
exports.show = async(id) =>{
    const resultado = await models.aluno.findByPk(id,{
        include:['cursoss']
    });
    return resultado;
}
exports.store = async(aluno) =>{
    const resultado = await models.aluno.create(aluno,{
        include:['cursos']
    });
    return resultado;
}
exports.update = async(aluno,id) =>{
    const resultado = await models.aluno.update(aluno,{
        where: {id:id}
    });
    return resultado;
}
exports.destroy = async(id) =>{
    const resultado = await models.aluno.destroy({
        where:{id:id}
    });
    return resultado;
}