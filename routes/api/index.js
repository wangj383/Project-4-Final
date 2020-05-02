const express = require('express');
const router = express.Router();
const indexCtrl = require('../../controllers/api/index');

router.get('/',indexCtrl.index)

module.exports = router;