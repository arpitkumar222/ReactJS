import React from "react";
import { connect } from "react-redux";

const Contect = props => {
  console.log(`contect `);
  return (
    <div>
      <h1>
        {props.fname} {props.lname} you can call us : 5555 5555 555{" "}
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
export default connect(mapStateToProps)(Contect);
