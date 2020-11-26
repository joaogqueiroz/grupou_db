const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const HardSkill = sequelize.define(name,{
    descricao:{
        type : DataTypes.STRING(50),
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

HardSkill.associate = (models) =>{
    HardSkill.hasMany(models.questao,{
        foreignKey:{
        name:'id_hardskill'
     },
     as:'hardskills'   
    })
    //muitos pra muitos
    HardSkill.belongsToMany(models.aluno,{
        through:'aluno_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'alunos'
    })
    HardSkill.belongsToMany(models.disciplina,{
        through:'disciplina_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_disciplina'
        },
        as:'disciplinas'
    })
    HardSkill.belongsToMany(models.turma,{
        through:'turma_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'turmas'
    })
    HardSkill.belongsToMany(models.atividadeavaliativa,{
        through:'atividadeavaliativa_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_atividadeavaliativa'
        },
        as:'atividadeavaliativas'
    })

}

module.exports = HardSkill;