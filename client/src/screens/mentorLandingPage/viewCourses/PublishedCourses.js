import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { publishedCourseAction, PublishedList } from "../../../actions/coursesActions";
import './Courses.css'
function PublishedCourses({ search }) {
  const dispatch = useDispatch();

  const history = useHistory();

  const publishedList = useSelector((state) => state.publishedList);
  const { courses } = publishedList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(PublishedList());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  const publishedHandler = (id) => {
    if (window.confirm("Successfully Published")) {
      dispatch(publishedCourseAction(id));
      dispatch(PublishedList());
    }
  };
  return (
    <div className='p-2'>
      <h2 className='createcourseheader py-4 text-center text-light'><strong> PUBLISHED COURSES</strong></h2>

      <div className='background container mt-4'>
        <div className='row'>

          {courses &&
            courses
              .filter((filteredCourse) =>
                filteredCourse.title.toLowerCase().includes(search.toLowerCase())
              )
              .reverse()

              .map((course) => (
                <div className="col-md-4 py-md-4 " data-aos="zoom-out" data-aos-delay="100">
                  <div className="flip-card m-auto">
                    <div className="flip-card-inner m-auto">
                      <div className="flip-card-front bg-light">
                        <h1 className="mt-5"><strong>{course.title}</strong></h1>
                        <p className="mt-5"><strong>Counducted By {userInfo && userInfo.name}</strong></p>
                        <p className="mt-4"> {course.content}</p>

                      </div>
                      <div className="flip-card-back">

                        <div className="mt-5 p-5">

                          <Button
                            variant='outline-success'
                            onClick={() => {
                              publishedHandler(course._id);
                            }}
                          >
                            UNPUBLISH
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
        </div>

      </div>
    </div>
  );
}

export default withRouter(PublishedCourses);
