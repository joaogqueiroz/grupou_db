const models= require('../db/models');

//index GET ALL
//show GET BY ID
//store POST
//update UPDATE
//destroy DELETE

exports.index = async() =>{
    const resultado = await models.usuario.findAll({
        include:['aluno','professor','questoes']
    });
    return resultado;
}
exports.show = async(id) =>{
    const resultado = await models.usuario.findByPk(id,{
        include:['aluno','professor','questoes']
    });
    return resultado;
}
exports.store = async(usuario) =>{
    const resultado = await models.usuario.create(usuario,{
        include: ['aluno','professor','questoes']
    });
    return resultado;
}
exports.update = async(usuario,id) =>{
    const resultado = await models.usuario.update(usuario,{
        where: {id:id}
    });
    return resultado;
}
exports.destroy = async(id) =>{
    const resultado = await models.usuario.destroy({
        where:{id:id}
    });
    return resultado;
}