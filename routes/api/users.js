var express = require('express');
var router = express.Router();
const usersCtrl = require('../../controllers/api/users')

router.post('/signup', usersCtrl.signup)
router.post('/login', usersCtrl.login)

router.use(require('../../config/auth'));
router.get('/',checkAuthOrg,usersCtrl.index)
router.get('/:id',checkAuthBoth,usersCtrl.show)
router.put('/:id',checkAuthBoth,usersCtrl.update)
router.delete('/:id',checkAuthOrg,usersCtrl.delete)
router.get('/:id/requests',checkAuthBoth,usersCtrl.requestHistory)


function checkAuthOrg(req, res, next) {
    if (req.organization) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

function checkAuthBoth(req, res, next) {
    if (req.organization|| req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}
module.exports = router;


