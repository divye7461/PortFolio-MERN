const express=require('express')
const router=express.Router();
const {getAllUsers,getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById} = require("../controllers/admin-controller");
const adminMiddleware=require('../middlewares/admin-middleware');
const authMiddleware=require('../middlewares/auth-middleware');

//Just to check user logged in hai ki nhi hai

router.route('/users').get(authMiddleware,adminMiddleware,getAllUsers)

router.route('/users/:id').get(authMiddleware,adminMiddleware,getUserById);

router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,updateUserById);

router.route('/contacts').get(authMiddleware,adminMiddleware,getAllContacts);

router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,deleteUserById);

router.route('/contact/delete/:id').delete(authMiddleware,adminMiddleware,deleteContactById);

module.exports=router;