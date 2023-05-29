import './App.css';
import Profile from './Profile/Profile';
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
    <Profile
    fullname = 'Jlassi Aziz'
    Bio = 'English Student'
    profession = 'FullStack dev'
    age ={20}>
    <img src="https://images.unsplash.com/photo-1684721637970-87031875065e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="men"/>
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
