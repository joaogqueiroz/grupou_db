const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const AtividadeAvaliativa = sequelize.define(name,{
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

AtividadeAvaliativa.associate = (models) =>{
    //1 pra 1
    AtividadeAvaliativa.belongsTo(models.turma,{
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })
    AtividadeAvaliativa.hasMany(models.grupo,{
        foreignKey:{
        name:'id_grupo'
        },
        as:'grupos'   
    })
    AtividadeAvaliativa.hasMany(models.avaliacao360,{
        foreignKey:{
        name:'id_avaliacao360'
        },
        as:'avaliacoes360'   
    })
    AtividadeAvaliativa.belongsToMany(models.hardskill,{
        through:'atividadeavaliativa_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'hardskills'
    })
}
module.exports = AtividadeAvaliativa;