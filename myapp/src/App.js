import React from 'react';
import Profile from './Profile/Profile';
import './App.css';


 function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        FullName="David Smith"
        Profession="Full-Stack JS Developer"
        Bio="I am a freelance web designer and developer based in Los Angeles. I strive to create simple, original, and impactful user experiences."
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width:"280px" ,height:"300px" , margin:"20px"}}
          src="./picture.jpg"
          alt="my profile pic"
        />
      </Profile>
      
    </div>
  );
}

export default App;
