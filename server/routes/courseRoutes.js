const express = require("express");
const {
  getCourseById,
  getCourses,
  CreateCourse,
  DeleteCourse,
  UpdateCourse,
  BlockCourse,
  getAllCourse,
  getBlockedCourse,
  getMentorCourses,
  putPublished,
  getpublished,
} = require("../controllers/courseController.js");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.js");

router.route("/").get(protect, getCourses);
router.route("/allcourses").get( getAllCourse);
router.route("/blockedcourses").get( getBlockedCourse);
router.route("/courses").get(protect, getpublished);
router.get("/mentorcourses/:id", getMentorCourses);

router.route("/block/:id").patch(BlockCourse);


router
  .route("/:id")
  .get(getCourseById)
  .delete(protect, DeleteCourse)
  .put(protect, UpdateCourse);
router.route("/create").post(protect, CreateCourse);

router.route('/:id').patch(putPublished);

module.exports =router;