const express = require("express");
const {
  SubscribedCourse,
  getCourses,
  markAsCompleted,
  getCourseById,
  getCompletedCourses,
  getCount,
} = require("../controllers/myCoursesController.js");
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/").post(protect, SubscribedCourse);

router.route("/enrolled").get(protect, getCourses);
router.route("/completed").get(protect, getCompletedCourses);
router.route("/completed/:id").patch(markAsCompleted);
router.route("/resumecourse/:id").get(getCourseById);
router.route('/chartData').get(protect, getCount)

module.exports = router;
