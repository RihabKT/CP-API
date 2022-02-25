import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList/UserList';




function App() {
  return (
    <div className="App">

      <div className='flexy'>

     <h1> WELCOME! </h1>
     <button className='login'>LOGIN</button>
     <button className='logout'> LOGOUT </button>


     </div>
     <UserList/>
    </div>
  )
}

export default App;
