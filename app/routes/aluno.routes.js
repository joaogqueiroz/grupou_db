module.exports = (() =>{

    const alunoController = require("../controllers/aluno.controller");

    var router = require("express").Router();

    router.get("/", async(req,res) =>{
        const aluno = await alunoController.index();
        res.json(aluno);
    })
    router.get("/:id", async(req,res) =>{
        const aluno = await alunoController.show(req.params.id);
        res.json(aluno);
    })
    router.post("/", async(req,res) => {
        const aluno = await alunoController.store(req.body);
        res.json(aluno);
        
    })
    router.put("/:id", async(req,res) =>{
        const aluno = await alunoController.update(req.body,req.params.id);
        res.json(aluno);
    })
    router.delete("/:id", async(req,res) =>{
        const aluno = await alunoController.destroy(req.params.id);
        res.json(aluno);
    })
    return router

})()