import React from "react";
import { connect } from "react-redux";

const About = props => {
  return (
    <div>
      <h1>
        {" "}
        Mr. {props.fname} {props.lname} feel free{" "}
      </h1>
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
export default connect(mapStateToProps)(About);
