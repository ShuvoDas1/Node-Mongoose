const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller')
const authController = require('../controllers/auth.controller')

router.post('/',authController.isAuthenticated,  shopController.create);
router.get('/allShops', shopController.getAll)
router.get('/:id',shopController.getById)
router.put('/:id',authController.isAuthenticated, shopController.updateById)
router.delete('/:id',authController.isAuthenticated, shopController.deleteById)


module.exports = router;