const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const Turma = sequelize.define(name,{
    numero:{
        type : DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false


});

Turma.associate = (models) =>{
    Turma.hasMany(models.disciplina,{
        foreignKey:{
        name:'id_disciplina'
     },
     as:'disciplinas'   
    })
    Turma.hasMany(models.grupo,{
        foreignKey:{
        name:'id_grupo'
        },
        as:'grupos'   
    })
    Turma.hasMany(models.atividadeavaliativa,{
        foreignKey:{
        name:'id_atividadeavaliativa'
        },
        as:'atividadeavaliativas'   
    })
//muitos pra muitos
    Turma.belongsToMany(models.professor,{
        through:'turma_professor',
        timestamps:false,
        foreignKey:{
            name:'id_professor'
        },
        as:'professores'
    })
    Turma.belongsToMany(models.curso,{
        through:'turma_curso',
        timestamps:false,
        foreignKey:{
            name:'id_curso'
        },
        as:'cursos'
    })
    Turma.belongsToMany(models.hardskill,{
        through:'turma_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'hardskills'
    })
    Turma.belongsToMany(models.aluno,{
        through:'turma_aluno',
        timestamps:false,
        foreignKey:{
            name:'id_aluno'
        },
        as:'alunos'
    })
}

module.exports = Turma;