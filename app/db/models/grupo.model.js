const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const Grupo = sequelize.define(name,{
    numero:{
        type : DataTypes.INTEGER,
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
//1 pra 1
Grupo.associate = (models) =>{
    Grupo.belongsTo(models.turma,{
        foreignKey:{
            name:'id_turma'
        },
    })
    Grupo.belongsTo(models.atividadeavaliativa,{
        foreignKey:{
            name:'id_atividadeavaliativa'
        },
    })
    Grupo.hasMany(models.tarefa,{
        foreignKey:{
        name:'id_tarefa'
        },
        as:'tarefas'   
    })
    Grupo.hasMany(models.avaliacao360,{
        foreignKey:{
        name:'id_avaliacao360'
        },
        as:'avaliacoes360'   
    })
    Grupo.belongsToMany(models.aluno,{
        through:'aluno_grupo',
        timestamps:false,
        foreignKey:{
            name:'id_grupo'
        },
        as:'alunos'
    })
}

module.exports = Grupo;