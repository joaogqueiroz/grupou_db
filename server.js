const express = require("express");

const bodyParser = require("body-parser");

const db = require('./app/db/models');
/*
db.sequelize.sync({force:true}).then(()=>{
    console.log('Tabelas dropadas e Sincronizadas')
})
*/
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) => {
    res.json({
        messege: "Grupou API"
    })
})

require("./app/routes")(app);

app.listen(3000, () => {
    console.log("Servidor Rodando")
})