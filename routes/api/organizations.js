var express = require('express');
var router = express.Router();
const organizationsCtrl = require('../../controllers/api/organizations')

router.post('/signup', organizationsCtrl.signup)
router.post('/login', organizationsCtrl.login)

// the followings are for super admin person to use
router.get('/',organizationsCtrl.index)
router.delete('/:id',organizationsCtrl.delete)

router.use(require('../../config/auth'));
router.get('/:id',checkAuthOrg, organizationsCtrl.show)
router.put('/:id',checkAuthOrg, organizationsCtrl.update)


function checkAuthOrg(req, res, next) {
    if (req.organization) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;

