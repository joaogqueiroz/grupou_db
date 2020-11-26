const models= require('../db/models');

//index GET ALL
//show GET BY ID
//store POST
//update UPDATE
//destroy DELETE

exports.index = async() =>{
    const resultado = await models.questao.findAll({
        include:['usuario']
    });
    return resultado;
}
exports.show = async(id) =>{
    const resultado = await models.questao.findByPk(id,{
        include:['usuario']
    });
    return resultado;
}
exports.store = async(questao) =>{
    const resultado = await models.questao.create(questao,{
        include:['usuario']
    });
    return resultado;
}
exports.update = async(questao,id) =>{
    const resultado = await models.questao.update(questao,{
        where: {id:id}
    });
    return resultado;
}
exports.destroy = async(id) =>{
    const resultado = await models.questao.destroy({
        where:{id:id}
    });
    return resultado;
}