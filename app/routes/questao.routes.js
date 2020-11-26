module.exports = (() =>{

    const questaoController = require("../controllers/questao.controller");

    var router = require("express").Router();

    router.get("/", async(req,res) =>{
        const questao = await questaoController.index();
        res.json(questao);
    })
    router.get("/:id", async(req,res) =>{
        const questao = await questaoController.show(req.params.id);
        res.json(questao);
    })
    router.post("/", async(req,res) => {
        const questao = await questaoController.store(req.body);
        res.json(questao);
        
    })
    router.put("/:id", async(req,res) =>{
        const questao = await questaoController.update(req.body,req.params.id);
        res.json(questao);
    })
    router.delete("/:id", async(req,res) =>{
        const questao = await questaoController.destroy(req.params.id);
        res.json(questao);
    })
    return router

})()