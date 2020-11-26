const models= require('../db/models');

//index GET ALL
//show GET BY ID
//store POST
//update UPDATE
//destroy DELETE

exports.index = async() =>{
    const resultado = await models.aluno.findAll({
        include:['curso']
    });
    return resultado;
}
exports.show = async(id) =>{
    const resultado = await models.aluno.findByPk(id,{
        include:['curso']
    });
    return resultado;
}
exports.store = async(aluno) =>{
    const resultado = await models.aluno.create(aluno,{
        include:['curso']
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