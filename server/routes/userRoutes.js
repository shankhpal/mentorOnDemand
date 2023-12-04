const{
  authUser,
  registerUser,
  updateUserProfile,
  BlockUser,
  delUser,
  getUsers,
  getAllMentors,
  getCount,
  getBlockedUsers,
  getBlockedMentors,
  
} =require("../controllers/userController.js");
const{ protect} = require("../middleware/authMiddleware.js");
const express = require('express');
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);
router.route("/block/:id").patch(BlockUser);
router.route('/:id').delete(protect,delUser);

router.route('/users').get( getUsers) 
router.route('/blockedusers').get(getBlockedUsers) 
router.route("/getblockedmentors").get(getBlockedMentors);
router.route("/getmentors").get(getAllMentors);
router.get("/count", getCount);


module.exports= router;