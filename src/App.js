import './App.css';
import Profile from './Profile/Profile';
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
    <Profile
    fullname = 'Amri Amine'
    Bio = 'engineer degree'
    profession = 'FullStack dev'
    age ={28}>
    <img src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="car"/>
    </Profile>
    
    </div>
  );
 
}

// in case we want a default bio describtion, a "developer" it will be displayed by default in case bio was left blank

Profile.defaultProps = {
  bio: "Developer",
};

// We have insisted that 'age' is a NUMBER type

Profile.propTypes = {
	age: PropTypes.number,
};

export default App;
