import React, {useState, useEffect} from 'react';
import './AppAdmin.css';
import Navbar from './sideNav/Navbar';
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';
import ViewCourses from './ViewCourses';
import ViewUsers from './ViewUsers';
import ViewMentors from './ViewMentors';
import ProtectedRoute from '../../protectedRoute/ProtectedRoute';
import { useSelector } from "react-redux";
import Blocked from './Blocked';
import './AppAdmin.css'


function AdmindashBoard() {

  const history = useHistory();
  const [search, setSearch] = useState("")
  const [IsAuth, setIsAuth] = useState("")
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if(!userInfo){
      history.push('/')
    }
    else
     {
       setIsAuth(userInfo.role)}
     
  }, [userInfo, history])

  return (
    <div className='admindash py-3'>
       <Router>
     
        <Navbar  setSearch={(s) => setSearch(s)} />
        <div className='adminhome mt-2'>
        <h2 className='adminhome py-4 text-center '><strong>{`Welcome Back ${userInfo && userInfo.name}...`}</strong></h2>
      </div>
        <Switch>
        <ProtectedRoute exact path="/blocked" IsAuth={IsAuth} role="Admin" render={() => (<Blocked search={search}  />)} />
        <ProtectedRoute exact path="/viewcourses" IsAuth={IsAuth} role="Admin" render={() => (<ViewCourses search={search}  />)} />
        <ProtectedRoute exact path="/viewusers" IsAuth={IsAuth} role="Admin" render={() => (<ViewUsers search={search}  />)} />
        <ProtectedRoute exact path="/viewmentors" IsAuth={IsAuth} role="Admin" render={() => (<ViewMentors search={search}  />)} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default AdmindashBoard;
