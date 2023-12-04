import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import React, { useEffect, useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { useSelector } from "react-redux";
import ProtectedRoute from "./protectedRoute/ProtectedRoute"
import Home from "./screens/LandingPage/Home"
import Contact from "./screens/About/Contact"
import About from "./screens/About/About"
import SingleCourse from "./screens/mentorLandingPage/SingleCourse/SingleCourse";
import Courses from "./screens/mentorLandingPage/viewCourses/Courses";
import CreateCourse from "./screens/mentorLandingPage/SingleCourse/CreateCourse";
import ViewCourses from "./screens/AdminLandingPage/ViewCourses";
import ViewUsers from "./screens/AdminLandingPage/ViewUsers";
import Enrolled from "./screens/UserLandingPage/Enrolled";
import MentorList from "./screens/UserLandingPage/MentorList";
import View from "./screens/UserLandingPage/View";
import MentorCourses from "./screens/UserLandingPage/Menu/MentorCourses";
import ResumeCourse from "./screens/UserLandingPage/Menu/ResumeCourse";
import PublishedCourses from "./screens/mentorLandingPage/viewCourses/PublishedCourses";
import ViewMentors from "./screens/AdminLandingPage/ViewMentors";
import homeImage from '../src/images/home.jpg'
import AdmindashBoard from "./screens/AdminLandingPage/AdmindashBoard";
import RegisterScreen from "./screens/RegisterLandingPage/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import Footer from './components/Footer';


function App() {
  const [search, setSearch] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [IsAuth, setIsAuth] = useState("")

  useEffect(() => {
    if(userInfo)
     {
       console.log(userInfo.role)
       setIsAuth(userInfo.role)}
   
  }, [userInfo])


  return (
   <div>
    <Router>
      
      <NavBar  className='mb-5' setSearch={(s) => setSearch(s)}/>
      <div  className='mt-5'>
      <Route exact path="/login" render={() => <LoginScreen />}></Route>
        <Route exact path="/register" render={() => <RegisterScreen />}></Route>
        <Route exact path="/profile"  render={() => <ProfileScreen />} />
        <Route exact path="/admindashboard" render={() => <AdmindashBoard />} />
        <ProtectedRoute exact path="/enrolled" IsAuth={IsAuth} role="User" render={() => (<Enrolled search={search}  />)} />
        <ProtectedRoute exact path="/unpublished" IsAuth={IsAuth} role="Mentor"  render={() => (<Courses search={search}  />)} />
      

        <Route exact path="/" render={()=><Home />}></Route>
          <Route exact path="/about" render={About}></Route>
          <Route exact path="/contact" render={Contact}></Route>
          <Route exact path="/courses/:id"   render={() => <SingleCourse />} />
          <Route exact path="/createcourse" render={() => <CreateCourse />}/>

          <Route exact path="/viewcourse"   render={() => (<View search={search}  />)} />
          <Route exact path="/published"   render={() => (<PublishedCourses search={search}  />)} />
    <Route  exact path="/mentorlist"  render={() => (<MentorList search={search}  />)} />
    <Route  exact path="/resumeCourse/:id" render={() => <ResumeCourse /> }/>
    <Route  exact path="/mentorcourses/"  render={() => (<MentorCourses search={search}  />)}/>
      
   
      </div>
      <Footer/>
    </Router>
    
    </div>
    
  );
}

export default App;
