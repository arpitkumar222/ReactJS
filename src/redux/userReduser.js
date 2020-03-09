import { USER_TYPE } from "./userType";

const initialUser = {
  firstName: "",
  lastName: ""
};

const render = (state = initialUser, action) => {
  console.log("reduser ,,, ", action.fname, action.lname);
  switch (action.type) {
    case USER_TYPE: {
      return {
        ...state,
        firstName: action.fname,
        lastName: action.lname
      };
    }
    default:
      return state;
  }
};

export default render;
