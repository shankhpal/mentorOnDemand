const Course = require("../models/courseModel.js");
const asyncHandler = require("express-async-handler");
const MyCourse = require("../models/myCourseModel.js");

const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ user: req.user._id, published: false });
  res.json(courses);
});

const getMentorCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ user: req.params.id, published: true });
  res.json(courses);
});

const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
});

const getAllCourse = asyncHandler(async (req, res) => {
  const courses = await Course.find({
    published: true,
    isBlocked: false,
  }).populate("user", "name");

  if (courses) {
    res.json(courses);
  } else {
    res.status(404).json({ message: "Courses not found" });
  }

  res.json(courses);
});

const getBlockedCourse = asyncHandler(async (req, res) => {
  const courses = await Course.find({ published: true, isBlocked: true });

  if (courses) {
    res.json(courses);
  } else {
    res.status(404).json({ message: "Courses not found" });
  }

  res.json(courses);
});

const CreateCourse = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const course = new Course({ user: req.user._id, title, content, category });

    const createdCourse = await course.save();

    res.status(201).json(createdCourse);
  }
});

const DeleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course && req.user.role !== "Admin") {
    if (course.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
  }

  if (course) {
    await MyCourse.remove({ course_Id: req.params.id });
    await course.remove();
    res.json({ message: "Course Removed" });
  } else {
    res.status(404);
    throw new Error("Course not Found");
  }
});

const BlockCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);


  if (course) {
    course.isBlocked = !course.isBlocked;

    const updatedCourse = await course.save();
    if (updatedCourse.isBlocked) {
      res.json("course Blocked successfully" );
    } else {
      res.json( "course unBlocked successfully" );
    }
  } else {
    res.status(404);
    throw new Error("Course not Found");
  }
});

const UpdateCourse = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const course = await Course.findById(req.params.id);

  if (course.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (course) {
    course.title = title;
    course.content = content;
    course.category = category;

    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } else {
    res.status(404);
    throw new Error("Course not found");
  }
});

const getpublished = asyncHandler(async (req, res) => {
  const courses = await Course.find({ user: req.user._id, published: true });

  if (courses) {
    res.json(courses);
  } else {
    res.status(404).json({ message: "Courses not found" });
  }

  res.json(courses);
});

const putPublished = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    course.published = !course.published;

    const updatedStatus = await course.save();
    res.json(updatedStatus);
  } else {
    res.status(400);
    throw new Error("Not Found");
  }
});

module.exports = {
  getCourseById,
  getCourses,
  CreateCourse,
  DeleteCourse,
  UpdateCourse,
  getAllCourse,
  getBlockedCourse,
  BlockCourse,
  getMentorCourses,
  putPublished,
  getpublished,
};
