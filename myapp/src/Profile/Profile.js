import React from "react";
import PropTypes from "prop-types";
import "./style.css"

 function Profile(props) {
  return (
    <div className="profile-card">
      <div className="photo">{props.children}</div>
      <div className="container">
        
          <span className="label"> Name : </span>
          {props.FullName}
        
        <p>
          
          <span className="label"> Profession : </span>
          {props.Profession}
        </p>
        <p>
          
          <span className="label"> Bio : </span>
          {props.Bio}
        </p>
        <button
          onClick={() => props.handleName(props.FullName)}
          className="btn"
        >
          Say Hello
        </button>
        <p className="label">I look forward to hearing about your project</p>
      </div>
    </div>
  );
}

Profile.propTypes = {
    FullName: PropTypes.string,
    Profession: PropTypes.string,
    Bio: PropTypes.string,
    handleName: PropTypes.func
  };
  
  Profile.defaultProps = {
    FullName: "No Data ",
    Profession: "No Data ",
    Bio: "No Data ",
    handleName: () => {
      alert("There is no Data ");
    }
  };

  export default Profile ;