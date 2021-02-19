import { Route, Switch } from 'react-router-dom';
import AuthPage from './components/AuthPage/AuthPage';
import LoginForm from './components/LoginForm/LoginForm';
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import VotePage from './components/VotePage/VotePage';
import './css/main.css';
import {login} from './store/actions/userActions';
import {connect} from 'react-redux';
import {useEffect} from 'react';

function App(props) {

  const users=[{
      username:'tanmoy123',
      name:'Tanmoy Roy',
      password:'tanmoy123'
    },
    {
      username:'aman123',
      name:'Aman Joshi',
      password:'aman123'
    },
    {
      username:'shubham123',
      name:'Shubham jain',
      password:'shubham123'
    },
    {
      username:'vineet123',
      name:'Vineet Sathe',
      password:'vineet123'
    }
  ]

  localStorage.setItem('users',JSON.stringify(users))
  const user=JSON.parse(localStorage.getItem('user'))

  useEffect(()=>{
    props.onLogin(user.username,user.password)
  },[])



  let routes=null;

  routes=(
    <>
      <Route path="/" exact component={AuthPage}/>
      <Route path="/home/:id" component={Navbar}/>
      <Route path="/home/vote" component={VotePage}/>
      <Route path="/home/profile" component={ProfilePage}/>
    </>
  )


  return (

    <div className="App">
      {routes}
    </div>
  );
}

const mapDispatchToProps=dispatch=>{
  return {
    onLogin: (username, password)=>dispatch(login(username, password))
  }
}

export default connect(null,mapDispatchToProps)(App);
