//Instancia del modelo de Usuarios vacia
let _fanpage;

const createFanpage = (req, res) => {
    const fanpage = req.body;
    _fanpage.create(fanpage)
    .then((data) =>{
        res.status(200);
        res.json({
            msg:"Fanpage creada correctamente",
            data:data
        });
    }) 
    .catch((err)=>{
        res.status(400);
        res.json({
            msg:"Error",
            data:err
        });
    })
}

const comentFanpage = (req,res) => {
    const id = req.params.id;
    const coments = req.body;
    _fanpage.update({_id:id}, {$push : coments}, {new:true})
    .then((data) => {
        res.status(200);
        res.json({
            data:data
        })
    })
    .catch((err) => {
        res.status(400);
        res.json({
            data:err
        })
    })
}

const getComentFanpageById = (req,res) => {
    const id = req.params.id;
    _fanpage.find({"_id":id},{coments:1,_id:0})
    .then((data) => {
        res.status(200),
        res.json({
            data:data
        })
    })
    .catch((err) => {
        res.status(400);
        res.json({
            data:err
        })
    })
}

const getCalfGlobalFanpage = (req,res) => {
    const id = req.params.id;
    _fanpage.findOne({"_id":id})
    .then((data) => {
       var califglobal=data.calif.reduce(function(a,b){return a+b})/data.calif.length;
        res.status(200),
        res.json({
            data:califglobal
        })
    })
    .catch((err) => {
        res.status(400);
        res.json({
            data:err
        })
    })
}

const getFanpage = (req,res) => {
    const id = req.params.id;
    _fanpage.find({"_id":id})
    .then((data) => {
        res.status(200),
        res.json({
            data:data
        })
    })
    .catch((err) => {
        res.status(400);
        res.json({
            data:err
        })
    })
}

//Se inicializa la variable user
module.exports = (Fanpage) =>{
    _fanpage = Fanpage;
    return ({
        createFanpage,
        comentFanpage,
        getComentFanpageById,
        getCalfGlobalFanpage,
        getFanpage
    });
}