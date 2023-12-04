import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listAllMentors,
  deleteUserAction,
  blockUserAction,
} from "../../actions/userActions";
import { Button, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function ViewMentors({ search }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userBlock = useSelector((state) => state.userBlock);
  const { message} = userBlock;
  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;
  const mentorList = useSelector((state) => state.mentorList);
  const { users } = mentorList;
   const [blockMessage ,setBlockMessage ]=useState();
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }

    dispatch(listAllMentors());
  }, [dispatch, userInfo, history, successDelete]);
  const deleteHandler = (id) => {
 
      dispatch(deleteUserAction(id));
    dispatch(listAllMentors());

    
  };
  const blockHandler = (id) => {
    
      dispatch(blockUserAction(id));
    dispatch(listAllMentors());
   
  };

  return (
    <div className='container'>
    <div className=" py-3">
     
       <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th> User_Name </th> 
            <th> Email </th>
            <th> Role </th>
            <th> Action </th>
          </tr>
        </thead>
      {users &&
        users
          .filter((filtereduser) =>
            filtereduser.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <tbody>
                <tr key={user._id}>
                  <td> {user.name} </td> 
                  <td> {user.email} </td>
                  <td> {user.role} </td>
                  <td>
                  <Link to="/allmentors">    
                      <Button id="block" className='mx-2'  variant="outline-warning" onClick={() => blockHandler(user._id)}>
                        BLOCK
                      </Button>
                      </Link>

                      <Button
                        variant="outline-danger"
                        className="mx-2"
                        onClick={() => deleteHandler(user._id)}
                      >
                        DELETE
                      </Button>
                  
                  
                  </td>
                </tr>
              </tbody>
           
          ))}
        </Table>
    </div>
    </div>
  );
}

export default ViewMentors;
