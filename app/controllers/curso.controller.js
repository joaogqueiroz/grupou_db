const models= require('../db/models');

//index GET ALL
//show GET BY ID
//store POST
//update UPDATE
//destroy DELETE

exports.index = async() =>{
    const resultado = await models.curso.findAll({
        include:['alunos']

    });
    return resultado;
}
exports.show = async(id) =>{
    const resultado = await models.curso.findByPk(id,{
        include:['alunos']

    });
    return resultado;
}
exports.store = async(curso) =>{
    const resultado = await models.curso.create(curso,{
        include:['alunos']

    });
    return resultado;
}
exports.update = async(curso,id) =>{
    const resultado = await models.curso.update(curso,{
        where: {id:id}
    });
    return resultado;
}
exports.destroy = async(id) =>{
    const resultado = await models.curso.destroy({
        where:{id:id}
    });
    return resultado;
}