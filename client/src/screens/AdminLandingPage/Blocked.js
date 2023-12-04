import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import "../../bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteUserAction,
    blockUserAction,
    listBlockedUsers,
    listBlockedMentors,
} from "../../actions/userActions";
import { deleteCourseAction, allBlockedCourses, blockCourseAction } from "../../actions/coursesActions";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function Blocked({ search }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const blockedUserList = useSelector((state) => state.blockedUserList);
    const { loading, error, blockedusers } = blockedUserList;
    const blockedMentorsList = useSelector((state) => state.blockedMentorsList);
    const {
        loading: loadingMentors,
        error: errorMentor,
        blockedMentors
    } = blockedMentorsList;
    const blockedCourseList = useSelector((state) => state.blockedCourseList);
    const { 
        loading: loadingCourse,
        error: errorCourse,
        blockedCourses } = blockedCourseList;

    const userDelete = useSelector((state) => state.userDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = userDelete;

    useEffect(() => {
        if (!userInfo) {
            history.push("/");
        }
        dispatch(listBlockedMentors());
        dispatch(listBlockedUsers());
        dispatch(allBlockedCourses());
    }, [dispatch, userInfo, history, successDelete]);

    const deleteHandler = (id, role ) => {
      
       dispatch(deleteUserAction(id));
        if (role === "Mentor") {
            dispatch(listBlockedMentors());
        }
        else {
            dispatch(listBlockedUsers());
        }
    };
    const courseDelete=(course)=>{
     dispatch(deleteCourseAction(course));
     dispatch(allBlockedCourses());
    }
    const unBlockHandler = (id, role) => {
        dispatch(blockUserAction(id));
        if (role === "Mentor") {
            dispatch(listBlockedMentors());
        }
        else {
            dispatch(listBlockedUsers());
        }
          
    };

    const courseUnBlockHandler=(course)=>{
         dispatch(blockCourseAction(course));
            dispatch(allBlockedCourses());
    }

    return (
        <div className='p-3 m-0'>
            <div className=' '>
                <div className=''>
                    <div className=''>
                        <h3 className='adminhomenew py-3 text-center text-light '><strong>BLOCKED USERS</strong></h3>
                    </div>

                    {error && <ErrorMessage variant="danger"> {error} </ErrorMessage>}
                    {errorDelete && (
                        <ErrorMessage variant="danger"> {errorDelete} </ErrorMessage>
                    )}
                    {loading && <Loading />} {loadingDelete && <Loading />}
                    <Table striped bordered  className="P-0" hover variant="dark">
                        <thead>
                            <tr>
                                <th> User_Name </th>
                                <th> Email </th>
                                <th> Role </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {blockedusers &&
                                blockedusers
                                    .filter((filtereduser) =>
                                        filtereduser.name.toLowerCase().includes(search.toLowerCase())
                                    )
                                    .reverse()
                                    .map((user) => (

                                        <tr key={user._id}>
                                            <td> {user.name} </td> 
                                            <td> {user.email} </td>
                                            <td> {user.role} </td>
                                            <td>
                                               <p> <Button id="block"  className="P-0 mx-1" variant='outline-warning' onClick={() => unBlockHandler(user._id, user.role )}>
                                                    UNBLOCK
                                                </Button>
                                                <Button
                                                    variant="outline-danger"
                                                    className="mx-1"
                                                    onClick={() => deleteHandler(user._id, user.role)}
                                                >
                                                    DELETE
                                                </Button></p>
                                            </td>
                                        </tr>

                                    ))}
                        </tbody>
                    </Table>
                </div>
                <div className=''>
                    <div className=''>
                        <h3 className='adminhomenew py-3 text-center text-light '><strong>BLOCKED MENTOR</strong></h3>
                    </div>

                    {errorMentor && <ErrorMessage variant="danger"> {errorMentor} </ErrorMessage>}
                    {errorDelete && (
                        <ErrorMessage variant="danger"> {errorDelete} </ErrorMessage>
                    )}
                    {loadingMentors && <Loading />} {loadingDelete && <Loading />}
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th> User_Name </th>
                                <th> Email </th>
                                <th> Role </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {blockedMentors &&
                                blockedMentors
                                    .filter((filtereduser) =>
                                        filtereduser.name.toLowerCase().includes(search.toLowerCase())
                                    )
                                    .reverse()
                                    .map((user) => (

                                        <tr key={user._id}>
                                            <td> {user.name} </td> <td> {user.email} </td>
                                            <td> {user.role} </td>
                                            <td>
                                                <Button id="block" variant='outline-warning' onClick={() => unBlockHandler(user._id, user.role)}>
                                                    BLOCK
                                                </Button>
                                                <Button
                                                    variant="outline-danger"
                                                    className=""
                                                    onClick={() => deleteHandler(user._id, user.role )}
                                                >
                                                    DELETE
                                                </Button>
                                            </td>
                                        </tr>

                                    ))}
                        </tbody>
                    </Table>
                </div>
            </div>


            <h3 className='adminhomenew py-3 text-center text-light '><strong>BLOCKED COURSES</strong></h3>
            {errorCourse && <ErrorMessage variant="danger">{errorCourse}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Table className=' mt-4 p-0 text-light  font-weight-bold' variant='dark' bordered  >

            <thead>
              <tr>
                <th>COURSE TITLE</th>
                <th>CATEGORY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
            
            {loadingCourse && <Loading />}
            {loadingDelete && <Loading />}
            {blockedCourses &&
              blockedCourses
                .filter((filteredCourse) =>
                  filteredCourse.title.toLowerCase().includes(search.toLowerCase())
                )
                .reverse()
                .map((course) => (
                    <tr key={course._id}>
                      <td>{course.title}</td>
                      <td>{course.category}</td>
                      <td>
                        <Button className="mx-2" onClick={() => courseUnBlockHandler(course._id)} variant='outline-warning'>UNBLOCK</Button>
                        <Button
                          variant="outline-danger"
                          className="mx-2"
                          onClick={() => courseDelete(course._id)}
                        >
                          DELETE
                        </Button>


                      </td>
                    </tr>
                ))}
                  </tbody>
          </Table>
        </div>
    )
}

export default Blocked
