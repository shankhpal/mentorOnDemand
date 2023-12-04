import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import MainScreen from "../../../components/MainScreen";
import { Link, useHistory, withRouter } from "react-router-dom";
import "../../../bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourseAction,
  listCourses,
  publishedCourseAction,
} from "../../../actions/coursesActions";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import './Courses.css';

function Courses({ search }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const courseList = useSelector((state) => state.courseList);
  const { loading, error, courses } = courseList;

 

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const courseDelete = useSelector((state) => state.courseDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = courseDelete;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    dispatch(listCourses());
  }, [dispatch, userInfo, history, successDelete]);
  
  const publishedHandler = (id) => {
    if (window.confirm("Successfully Published")) {
      dispatch(publishedCourseAction(id));
      dispatch(listCourses());
    }
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCourseAction(id));
    }
  };

  return (
  

    <MainScreen >
    
      <div className='row'>
        <div className='col-md-12 createcourse'>
          <div className='m-3 p-3'>
            <h2 className='m-3 p-3 text-center text-light'><strong>{`Welcome Back ${userInfo && userInfo.name}...`}</strong></h2>
              <h3 className='m-3 p-3 text-center text-light'>GREAT TO SEE YOU</h3>
              <p className='m-3 p-3 text-center text-light'>A warm welcome and lots of good wishes on becoming part of our growing team. Congratulations and on behalf of all the members. We are all happy and excited about your inputs and contribution to our company.
              We love to form a team, work with enthusiastic, creative people, and have a great learning attitude. And hear that you fit the bill perfectly. It's great to have you with us. Warmest welcome!</p>
              <h4 className='m-3 p-3 text-center text-light'>Go ahead with your Mentor Journey !</h4>
              <div className='m-3 text-center p-3'>
                <Link to="/createcourse">
                  <Button variant='outline-success' >
                    Create new course
                  </Button>
                </Link>
          </div>
          </div>
        </div>

      </div>
      
      <div className='row'>
      <Table className='unpublished mt-5 p-0 text-light font-weight-bold'  bordered  >
                <thead>
                  <tr>
                    <th>course_title</th>
                    <th>course_content</th>
                    <th>course_category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {courses &&
        courses
          .filter((filteredCourse) =>
            filteredCourse.title.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((course) => (
                  <tr key={course._id}>
                    <td>{course.title}</td>
                    <td>{course.content}</td>
                    <td>{course.category}</td>

                    <td>
                    <Button
                      variant='outline-success'
                      className="mx-2"
                       
                        onClick={() => {
                          publishedHandler(course._id);
                        }}
                      >
                        PUBLISH
                      </Button>
                      <Link to={`/courses/${course._id}`}>
                      <Button  className="mx-2" variant='outline-warning'>EDIT</Button>
                      </Link>
                      <Button
                        variant='outline-danger'
                        className="mx-2"
                        onClick={() => deleteHandler(course._id)}
                      >
                        {" "}
                        DELETE
                      </Button>

                     
                    </td>
                  </tr>
               
             
            
          ))}
           </tbody>
           </Table>
      </div>
    </MainScreen>
  );
}

export default withRouter(Courses);
