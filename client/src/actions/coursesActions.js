import {
  COURSES_CREATE_FAIL,
  COURSES_CREATE_REQUEST,
  COURSES_CREATE_SUCCESS,
  COURSES_DELETE_FAIL,
  COURSES_DELETE_REQUEST,
  COURSES_DELETE_SUCCESS,
  COURSES_LIST_FAIL,
  COURSES_LIST_REQUEST,
  COURSES_LIST_SUCCESS,
  COURSES_UPDATE_FAIL,
  COURSES_UPDATE_REQUEST,
  COURSES_UPDATE_SUCCESS,
  COURSES_BLOCK_FAIL,
  COURSES_BLOCK_REQUEST,
  COURSES_BLOCK_SUCCESS,
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
import axios from "axios";

export const listCourses = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSES_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/courses/`, config);

    dispatch({
      type: COURSES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COURSES_LIST_FAIL,
      payload: message,
    });
  }
};



export const allCourses = () => async (dispatch) => {
  try {
    dispatch({
      type: COURSES_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/courses/allcourses`);

    dispatch({
      type: COURSES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COURSES_LIST_FAIL,
      payload: message,
    });
  }
};
export const allBlockedCourses = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOCKEDCOURSES_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/courses/blockedcourses`);

    dispatch({
      type: BLOCKEDCOURSES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: BLOCKEDCOURSES_LIST_FAIL,
      payload: message,
    });
  }
};

export const createCourseAction = (title, content, category) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: COURSES_CREATE_REQUEST,
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
      `/api/courses/create`,
      { title, content, category },
      config
    );

    dispatch({
      type: COURSES_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COURSES_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteCourseAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSES_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/courses/${id}`, config);

    dispatch({
      type: COURSES_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COURSES_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateCourseAction = (id, title, content, category) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: COURSES_UPDATE_REQUEST,
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

    const { data } = await axios.put(
      `/api/courses/${id}`,
      { title, content, category },
      config
    );

    dispatch({
      type: COURSES_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COURSES_UPDATE_FAIL,
      payload: message,
    });
  }
};
export const blockCourseAction = (id) => async (
  dispatch,

) => {
  try {
    dispatch({
      type: COURSES_BLOCK_REQUEST,
    });

   

    const { data } = await axios.patch(
      `/api/courses/block/${id}`,
    
    );

    dispatch({
      type: COURSES_BLOCK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COURSES_BLOCK_FAIL,
      payload: message,
    });
  }
};


export const listMentorCourses = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MENTOR_COURSES_REQUEST,

    });
    console.log(id)

    const { data } = await axios.get(`/api/courses/mentorcourses/${id}`);

    dispatch({
      type: MENTOR_COURSES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: MENTOR_COURSES_FAIL,
      payload: message,
    });
  }
};


export const publishedCourseAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSE_Published_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.patch(`/api/courses/${id}`,config);

    dispatch({
      type: COURSE_Published_SUCCESS,
      payload: data,

  });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COURSE_Published_FAIL,
      payload: message,
    });
  }
};

export const PublishedList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Published_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {

        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/courses/courses`, config);
    console.log(data)

dispatch({
      type: Published_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Published_LIST_FAIL,
      payload: message,
    });
  }
};
