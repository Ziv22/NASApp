const { findByIdAndDelete } = require("../model/Image")

const   express = require("express"), 
        router  = express.Router(), 
        Image   = require("../model/Image")

router.get("/images/:id", async (req,res) =>{
    try{
        const query = req.params.id == 'undefined' ? {} : {_id : req.params.id}
        const images = await Image.find(query)
        res.send(images)
    }
    catch(err){
        console.log(err)
    }
})  
router.post("/image", async (req,res) =>{
    try{
        const image = await new Image(req.body)
        await image.save()
        res.send(image)
    }
    catch(err){
        console.log(err)
    }
})
router.delete("/image/:id", async (req,res) =>{
    try{
        await Image.findByIdAndDelete(req.params.id)
        res.send(`Deleted ${req.params.id}`)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router


