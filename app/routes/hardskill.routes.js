module.exports = (() =>{

    const hardskillController = require("../controllers/hardskill.controller");

    var router = require("express").Router();

    router.get("/", async(req,res) =>{
        const hardskill = await hardskillController.index();
        res.json(hardskill);
    })
    router.get("/:id", async(req,res) =>{
        const hardskill = await hardskillController.show(req.params.id);
        res.json(hardskill);
    })
    router.post("/", async(req,res) => {
        const hardskill = await hardskillController.store(req.body);
        res.json(hardskill);
        
    })
    router.put("/:id", async(req,res) =>{
        const hardskill = await hardskillController.update(req.body,req.params.id);
        res.json(hardskill);
    })
    router.delete("/:id", async(req,res) =>{
        const hardskill = await hardskillController.destroy(req.params.id);
        res.json(hardskill);
    })
    return router

})()