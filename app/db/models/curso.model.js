const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const Curso = sequelize.define(name,{
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

Curso.associate = (models) =>{
    Curso.belongsTo(models.aluno,{
        foreignKey:{
            name:'id_aluno'
        },
        as:'aluno'
    })
    Curso.belongsToMany(models.turma,{
        through:'curso_turma',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'turmas'
    })
    
}

module.exports = Curso;