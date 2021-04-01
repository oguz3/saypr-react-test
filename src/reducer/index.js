import { ADDUSER, REMOVEUSER, SETLOADING } from "../actions/index";

const INITIAL_STATE = {
  userData: [],
  isloading: true
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        userData: [...state.userData, action.payload]
      };
    case REMOVEUSER:
      return {
        ...state,
        userData: state.userData.filter(
          (user) => user.data.id !== action.payload
        )
      };
    case SETLOADING:
      return {
        ...state,
        isloading: action.payload
      };
    default:
      return state;
  }
};
