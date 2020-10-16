router = require("express").Router()

router.get("/",(req,res)=>{
    res.send("yea this is the houses");
});

module.exports = router;