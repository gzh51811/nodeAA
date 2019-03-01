var express = require('express');
var router = express.Router();
var {
    connect,
    insert,
    find,
    remove,
    ObjectId,
    update
    
} = require("../libs/mongo.js");
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/findUser', async (req, res, next) => {
    let {
        name,
    } = req.body
    let data = await find(`students`, name ? {
        name,
    } : {})
    res.send(data);
});


router.post('/insertUser', async (req, res, next) => {
    let {
        name,
        age,
    } = req.body
    let data = await insert(`students`, [{ 
        name: name,
        age: age
    }])
    res.send(data.ops[0]);
});


router.post('/removeUser', async (req, res, next) => {
    let {
        name
    } = req.body
    let data = await remove(`students`, { name: name });
    res.send(data);
});

router.post('/updateUser', async (req, res, next) => {
    let {
        name,
        age,
    } = req.body
    let data = await update(`students`, { name: name }, [{ age: age }]);
    res.send(data);
});
module.exports = router;