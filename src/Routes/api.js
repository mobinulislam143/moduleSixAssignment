var express = require('express')
var router = express.Router()
//blogControl
const blogCon = require('../Controllers/blogController')
router.get('/blog/create', blogCon.create)
router.get('/blog/read', blogCon.read)
router.get('/blog/delete', blogCon.delete)
router.get('/blog/update', blogCon.update)

//blog detailcontroller
const blogDetailCon = require('../Controllers/blogDetailsController')
router.get('/blog-Detail/create', blogDetailCon.create)
router.get('/blog-Detail/read', blogDetailCon.read)
router.get('/blog-Detail/delete', blogDetailCon.delete)
router.get('/blog-Detail/update', blogDetailCon.update)

// comment Controller 
const commentCon = require('../Controllers/commentController')
router.get('/comment/create', commentCon.create)
router.get('/comment/read', commentCon.read)
router.get('/comment/delete', commentCon.delete)
router.get('/comment/update', commentCon.update)

//message Controller
const messageCon = require('../Controllers/messageController')
router.get('/message/create', messageCon.create)
router.get('/message/read', messageCon.read)
router.get('/message/delete', messageCon.delete)
router.get('/message/update', messageCon.update)

// protfolio Controller
const protfolioCon = require('../Controllers/portfolioController')
router.get('/protfolio/create', protfolioCon.create)
router.get('/protfolio/read', protfolioCon.read)
router.get('/protfolio/delete', protfolioCon.delete)
router.get('/protfolio/update', protfolioCon.update)

// product Controller
const productCon = require('../Controllers/productController')
router.get('/product/create', productCon.create)
router.get('/product/read', productCon.read)
router.get('/product/delete', productCon.delete)
router.get('/product/update', productCon.update)

// profit Controller
const profitCon = require('../Controllers/profitController')
router.get('/profit/create', profitCon.create)
router.get('/profit/read', profitCon.read)
router.get('/profit/delete', profitCon.delete)
router.get('/profit/update', profitCon.update)

// project Controller
const projectCont = require('../Controllers/projectController')
router.get('/project/create', projectCont.create)
router.get('/project/read', projectCont.read)
router.get('/project/delete', projectCont.delete)
router.get('/project/update', projectCont.update)

// service Controller
const serviceCon = require('../Controllers/serviceController')
router.get('/service/create', serviceCon.create)
router.get('/service/read', serviceCon.read)
router.get('/service/delete', serviceCon.delete)
router.get('/service/update', serviceCon.update)

// title Controller
const titleCon = require('../Controllers/titleController')
router.get('/title/create', titleCon.create)
router.get('/title/read', titleCon.read)
router.get('/title/delete', titleCon.delete)
router.get('/title/update', titleCon.update)

module.exports = router