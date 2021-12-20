const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('this is the users route');
})

module.exports = router;