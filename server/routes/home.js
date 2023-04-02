const express =require('express')
const router = express.Router()
const {shirtPost} = require('../controllers/match.js')
router.get('/', (req, res)=>{
    res.status(200).send({
        "msg" : "ok"
    })
})
router.post('/shirtapi',shirtPost)

module.exports = router;