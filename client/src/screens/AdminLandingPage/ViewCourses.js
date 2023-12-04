import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourseAction, allCourses, blockCourseAction } from "../../actions/coursesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

import './AppAdmin.css'

function ViewCourses({ search }) {
  const dispatch = useDispatch();
  const history = useHistory()
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
    dispatch(allCourses());
  }, [
    dispatch,
    userInfo,
    history,
    successDelete,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCourseAction(id));
      dispatch(allCourses());
    }
  };
  const blockHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(blockCourseAction(id));
      dispatch(allCourses());
    }
  };

  return (
    <div className='container'>      
          <Table className='coursetable mt-4 p-0 text-light  font-weight-bold' variant='dark' bordered  >
            <thead>
              <tr>
                <th>COURSE TITLE</th>
                <th>CATEGORY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>.
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
                      <td>{course.category}</td>
                      <td>
                        <Button className="mx-2" onClick={() => blockHandler(course._id)} variant='outline-warning'>BLOCK</Button>
                        <Button
                          variant="outline-danger"
                          className="mx-2"
                          onClick={() => deleteHandler(course._id)}
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                 
                ))}
                 </tbody>
          </Table>
      
    </div>
  );
}

export default withRouter(ViewCourses);