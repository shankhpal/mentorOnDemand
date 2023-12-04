import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllMentors } from "../../actions/userActions"
import { listMentorCourses } from "../../actions/coursesActions";
import { Button,Card } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom'
import CommonHeader from "../../components/CommonHeader";
import { Icon } from '@iconify/react';
import bxMedal from '@iconify-icons/bx/bx-medal';


function MentorList({search}) {
    const dispatch = useDispatch();
  const history = useHistory();

    const mentorList = useSelector((state) => state.mentorList);
    const { users } = mentorList;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
   
    
    useEffect(() => {
        if (!userInfo) {
            history.push("/");
          }
        dispatch(listAllMentors());

    }, [
        dispatch

    ]);

    return (
        <div className=''>
            <CommonHeader title='MENTORS AVAILABLE'/>
        <div className='container mt-4 p-4'>
        <div className=' row'>
                    {
                        users &&
                        users
                        .filter((filtereduser) =>
                        filtereduser.name.toLowerCase().includes(search.toLowerCase())
                      )
                            .map((user) => (
                              
                                     <div className="col-md-4 py-md-4 " data-aos="zoom-out" data-aos-delay="100">
            <div className="flip-card m-auto">
              <div className="flip-card-inner m-auto">
                <div className="flip-card-front bg-light">
                <div className="test rounded-circle text-center my-4 mx-auto p-4">
                                    <Icon icon={bxMedal} color='#5fcf80' width="50px" height="50px" />
                                </div>
                  <h2 className="mt-5"><strong>{user.name}</strong></h2>
                  {/* <p>{course.category}</p> */}
                </div>
                <div className="flip-card-back">
                 
                  <div className="mt-5 p-5">

                  <Link  to='/mentorcourses'>
                                            <Button  variant="outline-success" onClick={e => { dispatch(listMentorCourses(user._id)) }}>View My Courses</Button>
                                           </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
           
                                  
                                   
                                
                                
                            ))}
               
        </div>
        </div>
        </div>
    )
}

export default MentorList
