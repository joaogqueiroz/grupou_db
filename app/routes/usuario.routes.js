module.exports = (() =>{

    const usuarioController = require("../controllers/usuario.controller");

    var router = require("express").Router();

    router.get("/", async(req,res) =>{
        const usuario = await usuarioController.index();
        res.json(usuario);
    })
    router.get("/:id", async(req,res) =>{
        const usuario = await usuarioController.show(req.params.id);
        res.json(usuario);
    })
    router.post("/", async(req,res) => {
        const usuario = await usuarioController.store(req.body);
        res.json(usuario);
        
    })
    router.put("/:id", async(req,res) =>{
        const usuario = await usuarioController.update(req.body,req.params.id);
        res.json(usuario);
    })
    router.delete("/:id", async(req,res) =>{
        const usuario = await usuarioController.destroy(req.params.id);
        res.json(usuario);
    })
    return router

})()