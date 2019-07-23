const router = require("express").Router();

module.exports = (wagner) => {
    const fanpageCtrl = wagner.invoke((Product) => require("../controllers/fanpage.controller")(Product));

    router.post("/",(req,res) => {
        fanpageCtrl.createFanpage(req,res);
    })

    router.put("/:id",(req,res) => {
        fanpageCtrl.comentFanpage(req,res);
    })

    router.get("/comentFanpage/:id",(req,res) => {
        fanpageCtrl.getComentFanpageById(req,res);
    })

    router.get("/CalifGlobalFanpage/:id",(req,res) => {
        fanpageCtrl.getCalfGlobalFanpage(req,res);
    })

    router.get("/Fanpage/:id",(req,res) => {
        fanpageCtrl.getFanpage(req,res);
    })

    return router;
}