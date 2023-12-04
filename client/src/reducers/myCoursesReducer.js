import {
  MYCOURSES_GET_FAIL,
  MYCOURSES_GET_REQUEST,
  MYCOURSES_GET_SUCCESS,
  COURSES_ENROLL_REQUEST,
  COURSES_ENROLL_SUCCESS,
  COURSES_ENROLL_FAIL,
  COURSES_COMPLETE_FAIL,
  COURSES_COMPLETE_REQUEST,
  COURSES_COMPLETE_SUCCESS,
  GET_COMPLETED_REQUEST,
  GET_COMPLETED_SUCCESS,
  GET_COMPLETED_FAIL,
} from "../constants/myCoursesConstant";


export const myCoursesListReducer = (state = { mycourses: [] }, action) => {
  switch (action.type) {
    case MYCOURSES_GET_REQUEST:
      return { loading: true };
    case MYCOURSES_GET_SUCCESS:
      return { loading: false, mycourses: action.payload };
    case MYCOURSES_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const completedCoursesReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case GET_COMPLETED_REQUEST:
      return { loading: true };
    case GET_COMPLETED_SUCCESS:
      return { loading: false, courses: action.payload };
    case GET_COMPLETED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const courseEnrollReducer = (state = {  }, action) => {
  switch (action.type) {
    case COURSES_ENROLL_REQUEST:
      return { loading: true };
    case COURSES_ENROLL_SUCCESS:
      return ({ loading: false, message: action.payload }
        );
    case COURSES_ENROLL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};



export const courseCompleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSES_COMPLETE_REQUEST:
      return { loading: true };
    case COURSES_COMPLETE_SUCCESS:
      return { loading: false, success: true };
    case COURSES_COMPLETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};