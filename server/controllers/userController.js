const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel.js");
const MyCourse = require("../models/myCourseModel.js");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && user.isBlocked) {
    res.status(401);
    throw new Error("You are blocked by Admin");
  } else if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      pic: user.pic,
      skill: user.skill,
      qualification: user.qualification,

      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    user.role = req.body.role || user.role;
    user.qualification = req.body.qualification || user.qualification;
    user.skill = req.body.skill || user.skill;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      role: updatedUser.role,
      skill: updatedUser.skill,
      qualification: updatedUser.qualification,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});


const BlockUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.isBlocked = !user.isBlocked;
    const updatedUser = await user.save();
    if (updatedUser.isBlocked) {
      res.json( "User Blocked successfully" );
    } else {
      res.json( "User unBlocked successfully" );
    }
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

const delUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  const courses = await Course.find({ user: req.params.id });
  const mycourses =await MyCourse.find({user: req.params.id });
  if (req.user.role !== "Admin") {
    res.status(401);
    throw new Error("You can't perform this action");
  }
  if (user) {
    if(courses)
   {  
     courses.map(async(course)=>{
     await MyCourse.remove({ course_Id: course._id });
     })
     await Course.remove({ user: req.params.id });
   }
   if(mycourses){
    await MyCourse.remove({user: req.params.id });
   }
    await user.remove();
    res.json({ message: "Removed" });
  } else {
    res.status(400);
    throw new Error("Not Found");
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({ role: "User",isBlocked:false });
 
  if (users) res.json(users);
  else {
    res.status(400);
    throw new Error("Not Found");
  }
});


const getBlockedUsers = asyncHandler(async (req, res) => {
  const users = await User.find({ role: "User",isBlocked:true });
 
  if (users) res.json(users);
  else {
    res.status(400);
    throw new Error("You have not Blocked any user");
  }
});


const getAllMentors = asyncHandler(async (req, res) => {
  const mentors = await User.find({ role: "Mentor" ,isBlocked:false });
  res.json(mentors);
});
const getBlockedMentors = asyncHandler(async (req, res) => {
  const mentors = await User.find({ role: "Mentor" ,isBlocked:true });
  res.json(mentors);
});


const getCount =asyncHandler(async(req, res)=>{
  const userCount = await User.countDocuments({role:'User'});
  const courseCount = await Course.countDocuments();
  const mentorCount = await User.countDocuments({role:'Mentor'});
  
   if(userCount || courseCount || mentorCount)
   {
     res.status(200);
     res.json({userCount, courseCount, mentorCount})
   }
   else{
    res.status(404);
    throw new Error('InFo not found!!');
   }

}); 


module.exports = {
  authUser,
  updateUserProfile,
  registerUser,
  BlockUser,
  getUsers,
  getBlockedUsers,
  delUser,
  getAllMentors,
  getBlockedMentors,
  getCount,
};
