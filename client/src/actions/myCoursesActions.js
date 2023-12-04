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
  import axios from "axios";



export const myCourses= () => async (dispatch, getState) => {
    try {
      dispatch({
        type:  MYCOURSES_GET_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/userCourses/enrolled`, config);
  
      dispatch({
        type:  MYCOURSES_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type:  MYCOURSES_GET_FAIL,
        payload: message,
      });
    }
  };

  export const enrollCourse = (course_Id) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: COURSES_ENROLL_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(
        `/api/userCourses/`,
        {course_Id },
        config
      );
  
      dispatch({
        type: COURSES_ENROLL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: COURSES_ENROLL_FAIL,
        payload: message,
      });
    }
  };

  export const completeCourseAction = (id) => async (
    dispatch
  ) => {
    try {
      dispatch({
        type: COURSES_COMPLETE_REQUEST,
      });
  
    
     
      const { data } = await axios.patch(
        `/api/userCourses/completed/${id}`,
      );
  
      dispatch({
        type: COURSES_COMPLETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: COURSES_COMPLETE_FAIL,
        payload: message,
      });
    }
  };

  export const completedCourses= () => async (dispatch, getState) => {
    try {
      dispatch({
        type:  GET_COMPLETED_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/userCourses/completed`, config);
  
      dispatch({
        type:  GET_COMPLETED_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type:  GET_COMPLETED_FAIL,
        payload: message,
      });
    }
  };
  