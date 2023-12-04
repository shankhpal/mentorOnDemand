import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_BLOCK_REQUEST,
  USER_BLOCK_SUCCESS,
  USER_BLOCK_FAIL,
  MENTOR_LIST_REQUEST,
  MENTOR_LIST_SUCCESS,
  MENTOR_LIST_FAIL,
  BLOCKEDMENTOR_LIST_REQUEST,
  BLOCKEDMENTOR_LIST_SUCCESS,
  BLOCKEDMENTOR_LIST_FAIL,
  BLOCKEDUSER_LIST_REQUEST,
  BLOCKEDUSER_LIST_SUCCESS,
  BLOCKEDUSER_LIST_FAIL,
  GET_USERPIC_REQUEST,
  GET_USERPIC_SUCCESS,
  GET_USERPIC_FAIL,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const userListReducer = (state = { }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const blockedUserListReducer = (state = { }, action) => {
  switch (action.type) {
    case BLOCKEDUSER_LIST_REQUEST:
      return { loading: true };
    case BLOCKEDUSER_LIST_SUCCESS:
      return { loading: false, blockedusers: action.payload };
    case BLOCKEDUSER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listMentorsReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case  MENTOR_LIST_REQUEST:
      return { loading: true };
    case MENTOR_LIST_SUCCESS:
      return {  loading: false, users: action.payload };
    case  MENTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const listBlockedMentorsReducer = (state = { blockedMentors: [] }, action) => {
  switch (action.type) {
    case  BLOCKEDMENTOR_LIST_REQUEST:
      return { loading: true };
    case BLOCKEDMENTOR_LIST_SUCCESS:
      return {  loading: false, blockedMentors: action.payload };
    case  BLOCKEDMENTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const userBlockReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_BLOCK_REQUEST:
      return { loading: true };
    case USER_BLOCK_SUCCESS:
      return { loading: false,message:action.payload, success: true };
    case USER_BLOCK_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

// export const getUserPic = (state = {}, action) => {
//   switch (action.type) {
//     case GET_USERPIC_REQUEST:
//       return { loading: true };
//     case GET_USERPIC_SUCCESS:
//       return { loading: false, data: action.payload,success: false};
//     case GET_USERPIC_FAIL:
//       return { loading: false, error: action.payload, success: false };

//     default:
//       return state;
//   }
// };
