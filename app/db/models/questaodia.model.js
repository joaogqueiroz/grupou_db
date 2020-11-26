const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const QuestaoDia = sequelize.define(name,{
    descricao:{
        type : DataTypes.TEXT,
        allowNull:false,
    },
    createdAt:{
        type : DataTypes.DATE,
        field: 'criado_em',
    },
    updatedAt:{
        type : DataTypes.DATE,
        field: 'atualizado_em',
    },
},{
    sequelize,
    tableName: name


});

QuestaoDia.associate = (models) =>{
    //1 pra 1
    QuestaoDia.belongsTo(models.questao,{
        foreignKey:{
            name:'id_questao'
        },
        as:'questao'
    })
    //1 pra 1
    QuestaoDia.belongsTo(models.aluno,{
        foreignKey:{
            name:'id_aluno'
        },
        as:'aluno'
    })
}
module.exports = QuestaoDia;