var express = require('express');
var router = express.Router();
const organizationsCtrl = require('../../controllers/api/organizations')

router.post('/signup', organizationsCtrl.signup)
router.post('/login', organizationsCtrl.login)

//this get index function is not going to be used in the actual project, but it is good to check here
router.get('/',organizationsCtrl.index)
// router.get('/new',organizationsCtrl.new)
router.get('/:id',organizationsCtrl.show)
// router.post('/', organizationsCtrl.create)
router.get('/:id/edit',organizationsCtrl.edit)
router.put('/:id',organizationsCtrl.update)
router.delete('/:id',organizationsCtrl.delete)

module.exports = router;

