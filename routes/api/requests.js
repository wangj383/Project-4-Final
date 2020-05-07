var express = require('express');
var router = express.Router();
const requestsCtrl = require('../../controllers/api/requests')

router.use(require('../../config/auth'));
router.get('/',checkAuthBoth,requestsCtrl.index)
router.get('/:id',checkAuthBoth,requestsCtrl.show)
router.post('/', checkAuthBoth,requestsCtrl.create)
router.put('/:id',checkAuthBoth,requestsCtrl.update)
router.delete('/:id',checkAuthBoth,requestsCtrl.delete)

function checkAuthBoth(req, res, next) {
    if (req.organization|| req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;