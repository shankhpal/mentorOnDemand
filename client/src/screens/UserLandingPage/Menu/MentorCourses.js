import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, InlineIcon } from '@iconify/react';
import bxBookReader from '@iconify-icons/bx/bx-book-reader';
import { Button, Card } from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../view.css'
import { enrollCourse } from "../../../actions/myCoursesActions";


function MentorCourses({match}) {
    const dispatch = useDispatch();
    const mentorCourses = useSelector((state) => state.mentorCourses);
    const { mentorC } = mentorCourses;

   
    return (
        <div className='container'>
             <h2 className="courseheading my-3 mt-4 p-4 text-light text-center"><strong> MENTOR COURSES </strong></h2>
        <div className='row'>
               
                    {
                        mentorC &&
                        mentorC

                            .map((mentor) => (
                                
                                <div className='cardnew col-sm-3 my-3'>
                                    <div className='whitecardnew border border-dark text-center mx-2 my-4'>
                                        <h2 className='text-center py-3'><strong>{mentor.title}</strong></h2>
                                        <div>
                                            <div className="testnew rounded-circle text-center my-5 mx-auto p-4">
                                                <Icon icon={bxBookReader} color='#000' width="50px" height="50px" />

                                            </div>
                                            <Link to='/enrolled' className='text-center py-5 px-2'>
                                                <Button className='mx-2' variant='outline-success' onClick={(e) => { dispatch(enrollCourse(mentor._id)) }}>ENROLL</Button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                               
                            ))}
                
                            {/* //  <div className='col-md-4'>
                            // <Card >
                            //     <Card.Img variant="top" src={images} />
                            //     <Card.Body>
                            //         <Card.Title><strong>{mentor.title}</strong></Card.Title>
            
                            //         <Link to='/previewcourse'>
                            //         <Button variant="outline-warning" >Preview</Button>
                            //        </Link>
                            //         <Button variant="outline-success" onClick={e => {dispatch(enrollCourse(mentor._id))}} >Enroll</Button>  
                            //     </Card.Body>
                            // </Card> */}
                           
           
        </div>
        </div>
    )
}

export default MentorCourses
