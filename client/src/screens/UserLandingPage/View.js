import React, { useEffect } from "react";
import { Icon } from '@iconify/react';
import bxBookReader from '@iconify-icons/bx/bx-book-reader';
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse } from "../../actions/myCoursesActions";
import { allCourses } from "../../actions/coursesActions";
import { useHistory } from "react-router-dom";
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CommonHeader from "../../components/CommonHeader";
import CourseCard from "./CourseCard";
import './view.css'

function View({ search }) {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const courseList = useSelector((state) => state.courseList);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { courses } = courseList;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    dispatch(allCourses());
  }, [dispatch]);

  return (
    <div >
      <CommonHeader title='COURSES' />

      <div className="container mt-4">
      <CourseCard />
      </div>

      <div className="container">
        <h2 className="courseheading my-3 mt-4 p-4 text-light text-center"><strong> AVAILABLE COURSES </strong></h2>
        <div className='row'>
        {courses &&
          courses
          .filter((filteredCourse) =>
            filteredCourse.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((course) => (
            <div className='cardnew col-sm-3 my-3'>
            <div className='whitecardnew border border-dark text-center mx-2 my-4'>
                <h2 className='text-center py-3'><strong>{course.title}</strong></h2>
                <div>
                <div className="testnew rounded-circle text-center my-5 mx-auto p-4">
                    <Icon icon={bxBookReader} color='#000' width="50px" height="50px" />
                
                </div>
                      <Link to='/enrolled' className='text-center py-4 px-2'>
                    <Button className='mx-2' variant='outline-success' onClick={(e) => {dispatch(enrollCourse(course._id))}}>ENROLL</Button>
                    </Link>
                    
                </div>
            </div>
        </div>

          ))}
         
          </div>
          </div>
          <div>
         
          </div>
      </div>
  );
}

export default View;
