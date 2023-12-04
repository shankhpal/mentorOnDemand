import {
  COURSES_UPDATE_REQUEST,
  COURSES_UPDATE_SUCCESS,
  COURSES_UPDATE_FAIL,
  COURSES_CREATE_FAIL,
  COURSES_CREATE_REQUEST,
  COURSES_CREATE_SUCCESS,
  COURSES_DELETE_FAIL,
  COURSES_DELETE_REQUEST,
  COURSES_DELETE_SUCCESS,
  COURSES_LIST_FAIL,
  COURSES_LIST_REQUEST,
  COURSES_LIST_SUCCESS,
  COURSES_BLOCK_REQUEST,
  COURSES_BLOCK_SUCCESS,
  COURSES_BLOCK_FAIL,
  MENTOR_COURSES_REQUEST,
  MENTOR_COURSES_SUCCESS,
  MENTOR_COURSES_FAIL,
  COURSE_Published_FAIL,
  COURSE_Published_REQUEST,
  COURSE_Published_SUCCESS,
  Published_LIST_FAIL,
  Published_LIST_REQUEST,
  Published_LIST_SUCCESS,
  BLOCKEDCOURSES_LIST_REQUEST,
  BLOCKEDCOURSES_LIST_SUCCESS,
  BLOCKEDCOURSES_LIST_FAIL,
 
} from "../constants/coursesConstants";

export const listMentorCourses = (state = { mentorC: [] }, action) => {
  switch (action.type) {
    case MENTOR_COURSES_REQUEST:
      return { loading: true };
    case MENTOR_COURSES_SUCCESS:
      return { loading: false, mentorC: action.payload };
    case MENTOR_COURSES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const courseListReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case COURSES_LIST_REQUEST:
      return { loading: true };
    case COURSES_LIST_SUCCESS:
      return { loading: false, courses: action.payload };
    case COURSES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const blockedCourseListReducer = (state = { blockedCourses: [] }, action) => {
  switch (action.type) {
    case BLOCKEDCOURSES_LIST_REQUEST:
      return { loading: true };
    case BLOCKEDCOURSES_LIST_SUCCESS:
      return { loading: false, blockedCourses: action.payload };
    case BLOCKEDCOURSES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const courseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSES_CREATE_REQUEST:
      return { loading: true };
    case COURSES_CREATE_SUCCESS:
      return { loading: false, success: true };
    case COURSES_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const courseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSES_DELETE_REQUEST:
      return { loading: true };
    case COURSES_DELETE_SUCCESS:
      return { loading: false, success: true };
    case COURSES_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const courseUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSES_UPDATE_REQUEST:
      return { loading: true };
    case COURSES_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case COURSES_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const courseBlockReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSES_BLOCK_REQUEST:
      return { loading: true };
    case COURSES_BLOCK_SUCCESS:
      return { loading: false, success: true };
    case COURSES_BLOCK_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const publishReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_Published_REQUEST:
      return { loading: true };
    case COURSE_Published_SUCCESS:
      return { loading: false, success: true };
    case COURSE_Published_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const publishedListReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case Published_LIST_REQUEST:
      return { loading: true };
    case Published_LIST_SUCCESS:
      return { loading: false, courses: action.payload };
    case Published_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
