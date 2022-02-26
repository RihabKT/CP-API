import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList/UserList';




function App() {
  return (
    <div className="App">

      <div className='flexy'>

      <h1> JOIN US, JOIN US!</h1>
    <img  src=' https://static3.srcdn.com/wordpress/wp-content/uploads/2020/07/Pokemon-Go-Jessie-and-James.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5 ' alt='myimage' width="250"/>
     <button className='login'>LOGIN</button>
     <button className='logout'> LOGOUT </button>


     </div>
     <UserList/>
    </div>
  )
}

export default App;
