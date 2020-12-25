const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller')

router.post('/', shopController.create);
router.get('/allShops', shopController.getAll)
router.get('/:id',shopController.getById)
router.put('/:id', shopController.updateById)
router.delete('/:id', shopController.deleteById)


module.exports = router;