import React, { useEffect} from "react";
import { Button, Table } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import "../../bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  listUsers,
  blockUserAction,
} from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function ViewCourses({ search }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  const userBlock = useSelector((state) => state.userBlock);
  const { message} = userBlock;

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
    dispatch(listUsers());
  }, [dispatch, userInfo, history, successDelete]);

  const deleteHandler = (id) => {
    
      dispatch(deleteUserAction(id));
    dispatch(listUsers());

    
  };
  const blockHandler = (id) => {
    
      dispatch(blockUserAction(id)); 
    dispatch(listUsers());
   

    
  };

  return (
    <div className='container'>
     
      
      {error && <ErrorMessage variant="danger"> {error} </ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger"> {errorDelete} </ErrorMessage>
      )}
      {loading && <Loading />} {loadingDelete && <Loading />}
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
        {users &&
          users
              .filter((filtereduser) =>
                filtereduser.name.toLowerCase().includes(search.toLowerCase())
              )
            .reverse()
            .map((user) => (
             
                <tr key={user._id}>
                  <td> {user.name} </td> <td> {user.email} </td>
                  <td> {user.role} </td>
                  <td>
                    <Button id="block" variant='outline-warning' onClick={() => blockHandler(user._id)}>
                      Block
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="mx-2"
                      onClick={() => deleteHandler(user._id)}
                    >
                      Delete
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
