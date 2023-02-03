
import Profile from './Profile/Profile';
import photo from './image/my_photo.jpg';
import './App.css';
/*import PropTypes from 'prop-types';*/
function App() {
  const profile = {
    fullName: "Fathia AZZOUZI",
    bio : " My name is Fathia Azzouzi",
    profession: " I am an electrical engineer", 
  }
  function handleName(name){
  alert(`my name is ${name}`) 
}
  return (   
<div className=' profile'>
  <Profile profile={profile} handleName={handleName} className='profile'> 
  <img src={photo} alt="my_photo" className='photo' />
  </Profile>   
</div>
  );
}

export default App;