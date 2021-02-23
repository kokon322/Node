const router = require('express').Router();

router.get('/', ((req, res) => {
    res.json('autorization');
}));

module.exports = router;