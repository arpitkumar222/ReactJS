import React, { useState } from "react";
import setUser from "../redux/userAction";
import { connect } from "react-redux";

const Home = props => {
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [display, setdisplay] = useState(false);

  const OnSubmit = e => {
    e.preventDefault();
    alert(`welcome ${fn} ${ln}`);
    props.setUser(fn, ln);
    setdisplay(true);
  };
  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={OnSubmit}>
        First name:
        <input type="text" onChange={e => setfn(e.target.value)} value={fn} />
        <br />
        Last name :
        <input type="text" onChange={e => setln(e.target.value)} value={ln} />
        <br />
        <button type="submit">submit</button>
      </form>
      {display ? (
        <div>
          welcome <br /> {props.fname} {props.lname}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("home state", state);
  return {
    fname: state.firstName,
    lname: state.lastName
  };
};

const mapDispatchTOProps = dispatch => {
  return {
    setUser: (fn, ln) => dispatch(setUser(fn, ln))
  };
};
export default connect(mapStateToProps, mapDispatchTOProps)(Home);
