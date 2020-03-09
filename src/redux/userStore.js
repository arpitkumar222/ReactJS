import { createStore } from "redux";
import reduser from "./userReduser";

const store = createStore(reduser);
console.log(store.getState());
export default store;
