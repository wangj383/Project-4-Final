var express = require('express');
var router = express.Router();
const requestsCtrl = require('../../controllers/api/requests')

router.get('/',requestsCtrl.index)
router.get('/:id',requestsCtrl.show)
router.get('/',requestsCtrl.new)
router.post('/', requestsCtrl.create)
router.get('/:id/edit',requestsCtrl.edit)
router.put('/:id',requestsCtrl.update)
router.delete('/:id',requestsCtrl.delete)

module.exports = router;