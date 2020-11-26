const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''),'.js');

const Professor = sequelize.define(name,{
    documento:{
        type : DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false


});

Professor.associate = (models) =>{
    //1 pra 1
    Professor.belongsTo(models.usuario,{
        foreignKey:{
            name:'id_usuario'
        },
        as:'professor'
    })
    Professor.belongsToMany(models.turma,{
        through:'turma_professor',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'turmas'
    })
    Professor.belongsToMany(models.disciplina,{
        through:'disciplina_professor',
        timestamps:false,
        foreignKey:{
            name:'id_disciplina'
        },
        as:'disciplinas'
    })
    
}


module.exports = Professor;