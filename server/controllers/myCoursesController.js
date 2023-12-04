const asyncHandler = require("express-async-handler");
const MyCourse = require("../models/myCourseModel");

const SubscribedCourse = asyncHandler(async (req, res) => {
  const { course_Id } = req.body;

  const exists = await MyCourse.findOne({ user: req.user._id, course_Id });

  if (exists) {
    res.status(404);
    throw new Error("course already enrolled");
  }
  const myCourse = new MyCourse({ user: req.user._id, course_Id });

  const subscribedCourse = await myCourse.save();

  res.status(201).json(subscribedCourse);
});

const getCourses = asyncHandler(async (req, res) => {
  const courses = await MyCourse.find({ user: req.user._id , status:false}).populate(
    "course_Id"
  );

  if (courses) {
    res.json(courses);
  } else {
    res.status(400);
    throw new Error("Not Found");
  }
});

const markAsCompleted = asyncHandler(async (req, res) => {
  const enrolled = await MyCourse.findById(req.params.id);

  if (enrolled) {
    enrolled.status = !enrolled.status;
    const completedCourse = await enrolled.save();

    if (completedCourse.status) {
      res.json({ message: "course completed successfully" });
    } else {
      res.status(404);
    }
  } else {
    res.status(404);
    throw new Error("Course not Found");
  }
});

const getCourseById = asyncHandler(async (req, res) => {
  const course = await MyCourse.findById(req.params.id).populate({
    path: "course_Id",
    populate: {
      path: "user",
    },
  });
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
});

const getCompletedCourses = asyncHandler(async (req, res) => {
  const courses = await MyCourse.find({ user: req.user._id , status:true}).populate(
    "course_Id"
  );

  if (courses) {
    res.json(courses);
  } else {
    res.status(400);
    throw new Error("Not Found");
  }
});


const getCount =asyncHandler(async(req, res)=>{
  const completedCount = await MyCourse.countDocuments({ user: req.user._id , status:true});
  
  const enrolledCount = await MyCourse.countDocuments({ user: req.user._id , status:false});
  
   if(completedCount || enrolledCount)
   {
     res.status(200);
     res.json({completedCount, enrolledCount})
   }
   else{
    res.status(404);
    throw new Error('InFo not found!!');
   }

});

module.exports = {
  SubscribedCourse,
  getCourses,
  markAsCompleted,
  getCourseById,
  getCompletedCourses,
  getCount,
};
