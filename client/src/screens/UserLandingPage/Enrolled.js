import React, {useEffect,useState} from "react";
import axios from "axios";
import { Table ,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { myCourses,completedCourses } from "../../actions/myCoursesActions";
import CommonHeader from "../../components/CommonHeader";
import './view.css';
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import Chart from "./Chart";
function Enrolled({ search }) {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const myCoursesList = useSelector((state) => state.myCoursesList);
  const { mycourses } = myCoursesList;
  const completedCourse = useSelector((state) => state.completedCourses);
  const { courses } = completedCourse;
  const dispatch = useDispatch();
  
  const [completed, setCompleted] = useState();
  const [pending, setPending] = useState();


  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    dispatch(myCourses());
    dispatch(completedCourses())
  }, [userInfo, history, dispatch]);

  
  useEffect(() => {
    if(userInfo)
    { const config = {
       headers: {
         Authorization: `Bearer ${userInfo.token}`,
       },
     };
 
     const fetchData = async () => {
       const { data } = await axios.get('/api/userCourses/chartData', config)
       
         setCompleted(data.completedCount);
         setPending(data.enrolledCount);
     }
     fetchData();}
   })
 
 
  const resumeCourse=(id)=>{
    
    history.push(`/resumeCourse/${id}`)
  }

  return (
    <div>
      <CommonHeader title='MY COURSES'/>
      <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
       
         <h2 className="text-dark my-3 text-center"><strong>MY ENROLLMENTS</strong></h2>
      <Table className='enrolltable border' striped bordered  >
      <thead>
       
    <tr>
      <th><strong>COURSE</strong></th>
      <th><strong>CATEGORY</strong></th>
      <th><strong>RESUME</strong></th>

    </tr>
  </thead>
        {mycourses &&
          mycourses
            .filter((filteredcourse) =>
              filteredcourse.course_Id.title
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .reverse()
            .map((course) => (
              <tbody>
                <tr key={course.course_Id._id}>
                  <td> {course.course_Id.title} </td>
                  <td> {course.course_Id.category} </td>
                  <td> <Button variant="outline-success" onClick={e => {resumeCourse(course._id)}} >Go To Course</Button>  
                  </td>
                </tr>
              </tbody>
            ))}
      </Table>
     
      </div>


      <div className='col-md-6 '>
        
      <h2 className="my-3 text-dark text-center"><strong> MY ACHEIVEMENTS</strong></h2>
     
      <Table className='enrolltable border' striped bordered  >
      <thead>
    <tr>
      <th><strong>COURSE</strong></th>
      <th><strong>CATEGORY</strong></th>
      <th><strong>RESUME</strong></th>

    </tr>
  </thead>
        {courses &&
          courses
            .filter((filteredcourse) =>
              filteredcourse.course_Id.title
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .reverse()
            .map((course) => (
              <tbody>
                <tr key={course.course_Id._id}>
                  <td> {course.course_Id.title} </td>
                  <td> {course.course_Id.category} </td>
                  <td> <Button variant="outline-success" onClick={e => {resumeCourse(course._id)}} >Go To Course</Button>  
                  </td>
                </tr>
              </tbody>
            ))}
      </Table>
      
      </div>
    </div>
    <Chart completed={completed} pending={pending}/>
    </div>
    </div>
  );
}

export default withRouter(Enrolled);
