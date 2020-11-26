const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const Disciplina = sequelize.define(name,{
    nome:{
        type : DataTypes.STRING,
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

Disciplina.associate = (models) =>{
    Disciplina.belongsTo(models.turma,{
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })
    Disciplina.belongsToMany(models.professor,{
        through:'disciplina_professor',
        timestamps:false,
        foreignKey:{
            name:'id_professor'
        },
        as:'professores'
    })
    Disciplina.belongsToMany(models.hardskill,{
        through:'disciplina_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'hardskills'
    })
    
}

module.exports = Disciplina;