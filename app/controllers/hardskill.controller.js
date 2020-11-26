const models= require('../db/models');

//index GET ALL
//show GET BY ID
//store POST
//update UPDATE
//destroy DELETE

exports.index = async() =>{
    const resultado = await models.hardskill.findAll({

    });
    return resultado;
}
exports.show = async(id) =>{
    const resultado = await models.hardskill.findByPk(id);
    return resultado;
}
exports.store = async(hardskill) =>{
    const resultado = await models.hardskill.create(hardskill,{

    });
    return resultado;
}
exports.update = async(hardskill,id) =>{
    const resultado = await models.hardskill.update(hardskill,{
        where: {id:id}
    });
    return resultado;
}
exports.destroy = async(id) =>{
    const resultado = await models.hardskill.destroy({
        where:{id:id}
    });
    return resultado;
}