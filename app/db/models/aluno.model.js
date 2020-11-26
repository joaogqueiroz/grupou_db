const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const Aluno = sequelize.define(name,{
    matricula:{
        type : DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false


});

Aluno.associate = (models) =>{
    //1 pra 1
    Aluno.belongsTo(models.usuario,{
        foreignKey:{
            name:'id_usuario'
        },
        as:'aluno'
    })
    Aluno.hasMany(models.questaodia,{
        foreignKey:{
        name:'id_questaodia'
        },
        as:'questoesdia'   
    })
    Aluno.hasMany(models.curso,{
        foreignKey:{
        name:'id_curso'
        },
        as:'cursos'   
    })
    Aluno.hasMany(models.tarefa,{
        foreignKey:{
        name:'id_tarefa'
        },
        as:'tarefa'   
    })
    Aluno.hasMany(models.avaliacao360,{
        foreignKey:{
        name:'id_avaliacao360'
        },
        as:'avaliacao360'   
    })

    Aluno.belongsToMany(models.hardskill,{
        through:'aluno_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_aluno'
        },
        as:'hardskills'
    })
//muitos pra muitos
    Aluno.belongsToMany(models.softskill,{
        through:'aluno_softskill',
        timestamps:false,
        foreignKey:{
            name:'id_aluno'
        },
        as:'softskills'
    })
    Aluno.belongsToMany(models.grupo,{
        through:'aluno_grupo',
        timestamps:false,
        foreignKey:{
            name:'id_aluno'
        },
        as:'grupos'
    })
    Aluno.belongsToMany(models.turma,{
        through:'turma_aluno',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'turmas'
    })
}

module.exports = Aluno;