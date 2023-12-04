import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  courseCreateReducer,
  courseDeleteReducer,
  courseListReducer,
  courseUpdateReducer,
  courseBlockReducer,
  listMentorCourses,
  publishedListReducer,
  publishReducer,
  blockedCourseListReducer,

} from "./reducers/coursesReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
  userBlockReducer,
  userDeleteReducer,
  userListReducer,
  listMentorsReducer,
  blockedUserListReducer,
  listBlockedMentorsReducer,
} from "./reducers/userReducers";
import { 
  courseEnrollReducer,
   myCoursesListReducer,
   courseCompleteReducer,
   completedCoursesReducer,
   } from "./reducers/myCoursesReducer";

const reducer = combineReducers({
  courseList: courseListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  courseCreate: courseCreateReducer,
  courseDelete: courseDeleteReducer,
  courseUpdate: courseUpdateReducer,
  userUpdate: userUpdateReducer,
  courseBlock: courseBlockReducer,
  userBlock: userBlockReducer,
  userDelete: userDeleteReducer,
  userList: userListReducer,
  myCoursesList: myCoursesListReducer,
  courseEnroll:courseEnrollReducer,
  mentorList: listMentorsReducer,
  mentorCourses : listMentorCourses,
  courseComplete:courseCompleteReducer,
  coursePublished:publishReducer,
  publishedList:publishedListReducer,
  completedCourses:completedCoursesReducer,
  blockedUserList:blockedUserListReducer,
  blockedMentorsList:listBlockedMentorsReducer,
  blockedCourseList:blockedCourseListReducer,


 
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;