var express = require('express');
var router = express.Router();
const usersCtrl = require('../../controllers/api/users')

router.get('/',usersCtrl.index)
router.get('/:id',usersCtrl.show)
router.get('/',usersCtrl.new)
router.post('/',usersCtrl.create)
router.get('/:id/edit',usersCtrl.edit)
router.put('/:id',usersCtrl.update)
router.delete('/:id',usersCtrl.delete)
router.get('/:id/requests',usersCtrl.requestHistory)

module.exports = router;
