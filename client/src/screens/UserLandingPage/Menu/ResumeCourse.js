import React, { useEffect, useState } from 'react';
import './ResumeCourse.css'
import { Button, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory,useParams } from 'react-router-dom';
import axios from 'axios';
import { listMentorCourses } from "../../../actions/coursesActions";
// import TopMentors from "./TopMentors";
import { completeCourseAction } from "../../../actions/myCoursesActions";

function RemumeCourse() {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();
  const dispatch = useDispatch();
  const [mycourse, setMycourse] = useState();
  const [able, setAble] = useState(false);
  const {id}=useParams();
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    const fetch = async () => {
      const { data } = await axios.get(`/api/userCourses/resumecourse/${id}`);
      setMycourse(data);
    }

    fetch()

  }, [id,history, userInfo]);

  const onClickHandler = (id) => {
    dispatch(completeCourseAction(id))
    setAble(true)
  }


  return (
    <div>
      {mycourse && (
        <div className="preview mt-5">
          <div className='row m-0 p-0'>
            <div className='first m-0 p-0 col-md-8'>

              <iframe className='videoplayer' src="https://www.youtube.com/embed/pWWOEcd7f6k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='second m-0 p-0 col-md-4'>
              <h1 className='text-center my-5'>{mycourse.course_Id.title.toUpperCase()}</h1>
              <h5 className='p-2 text-center text-light'>WELCOME TO {mycourse.course_Id.title.toUpperCase()} FOR BEGGINER, INTERMEDIATE AND ADVANCED LEVEL !!!</h5>
              <div className='my-5 text-center p-5'>

                <Button className='mx-2 P-2' rounded variant="outline-success" onClick={() => { onClickHandler(mycourse._id) }} disabled={mycourse.status || able}>MARK COMPLETE</Button>
                <Link to="/enrolled"><Button className='mx-2 P-2' rounded variant="outline-warning">GO BACK HOME</Button></Link>

              </div>
            </div>
          </div>

        <div className='container'>
          < div className='row mt-5  p-2'>
            <div className='col-md-4' >
              <div className=''>
                <div className='greencard mt-2'>
                  <h1 className='text-left text-light p-4'><strong>Why Choose Mentor ?</strong></h1>
                  <p className='px-4 text-light'>Here are just some of the reasons why you should choose e-learning and blended learning as an option: e-learning training courses are extremely cost-efficient with classroom and instructor costs continuing to increase, plus travel / refreshment / staff cover, e-learning makes obvious sense at a fraction of the cost.</p>

                </div>
              </div>
            </div>
          <div className='first col-md-8'>
              <h2 className='p-4 '><strong><i>HEY THERE, I AM {mycourse.course_Id.user.name.toUpperCase()} !!</i></strong></h2>
              <div className=''>
                <h5 className='px-4 py-3'><strong>WELCOME TO {mycourse.course_Id.title.toUpperCase()} FOR BEGGINER,
                  INTERMEDIATE AND ADVANCED LEVEL !!!</strong></h5>
                  <p className='px-4 py-3'>Here are just some of the reasons why you should choose e-learning and blended learning as an option: e-learning training courses are extremely cost-efficient with classroom and instructor costs continuing to increase</p>
                <h5 className='px-4 py-3'><strong>Check out my other courses </strong></h5>
                <Link to='/mentorcourses'>
                  <Button
                    className='mx-4'
                    
                    rounded variant="outline-success"
                    onClick={() => { dispatch(listMentorCourses(mycourse.course_Id.user._id)) }}
                  >
                    <strong>CLICK TO VIEW MORE</strong>
                  </Button></Link>
              </div>
            </div>
            </div>
          </div>
          {/* <div className='m-2'>
            <TopMentors  />
            </div> */}
        </div>)}
    </div>
  )
}

export default RemumeCourse
