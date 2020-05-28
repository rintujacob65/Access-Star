const express = require('express')
const router = express.Router()
const stocksController = require('../app/controllers/stocksController')
const salesController = require('../app/controllers/salesController')
const usersController = require('../app/controllers/usersController')
const {authenticateUser} = require('../app/middlewares/authentication')
const employeesController = require('../app/controllers/employeesController')

const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
     // cb(null, file.fieldname + '-' + Date.now() + '.jpg')
     cb(null, Date.now() + file.originalname)
    }
  });
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
var upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter
});

var uploadEmp = upload.fields([
  { name: 'emiratesIdImage' },
  { name: 'visaImage'},
  { name: 'profilePic'},
  { name: 'passportImage'}
])

  // const upload = multer({ storage: storage,
  //   limits: { fileSize: 1024 * 1024 * 5 },
  //   fileFilter: fileFilter
  //  });

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/account',authenticateUser, usersController.account)
router.delete('/logout', authenticateUser,usersController.logout)

router.get('/stocks',authenticateUser,stocksController.list)
router.get('/stocks/:id',authenticateUser,stocksController.show)
router.post('/stocks',authenticateUser, upload.single("image") ,stocksController.create)
router.put('/stocks/:id',authenticateUser,stocksController.update)
router.put('/stocks/image/:id',
            authenticateUser,
            upload.single('image'),
            stocksController.updateImage)
router.delete('/stocks/:id',authenticateUser,stocksController.destroy)

router.get('/employees',authenticateUser,employeesController.list)
router.get('/employees/:id',authenticateUser,employeesController.show)
router.post('/employees',  authenticateUser, uploadEmp,employeesController.create)
//router.put('/employees/:id',authenticateUser,employeesController.update)
router.delete('/employees/:id',authenticateUser,employeesController.destroy)

router.get('/sales',authenticateUser,salesController.list)
router.get('/sales/:id',authenticateUser,salesController.show)
router.post('/sales', authenticateUser,salesController.create)
router.put('/sales/:id',authenticateUser,salesController.update)
router.delete('/sales/:id',authenticateUser,salesController.destroy)




module.exports = router
