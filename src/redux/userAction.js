import { USER_TYPE } from "./userType";

const setUser = (fn, ln) => {
  console.log("action ... ", ln, fn);
  return {
    type: USER_TYPE,
    fname: fn,
    lname: ln
  };
};
export default setUser;
