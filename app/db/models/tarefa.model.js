const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const Tarefa = sequelize.define(name,{
    descricao:{
        type : DataTypes.TEXT,
        allowNull:false,
    },
    nome:{
        type : DataTypes.STRING(60)
    },
    nota:{
        type : DataTypes.INTEGER,
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

Tarefa.associate = (models) =>{
    //1 pra 1
    Tarefa.belongsTo(models.aluno,{
        foreignKey:{
            name:'id_aluno'
        },
        as:'aluno'
    })
    Tarefa.belongsTo(models.grupo,{
        foreignKey:{
            name:'id_grupo'
        },
        as:'grupo'
    })
}
module.exports = Tarefa;