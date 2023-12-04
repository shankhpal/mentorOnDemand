import React, { useEffect } from 'react'
import '../../bootstrap.min.css';
import ImageSlider from './home/ImageSlider';
import Card from './home/Card'
import Middle from './home/Middle';
import Heading from './home/Heading'
import react from '../../images/teach.jpg'
import './home.css'
import Numbers from './home/Numbers';
import { useDispatch, useSelector } from 'react-redux';
import { allCourses } from '../../actions/coursesActions';

function Home() {
    const courseList = useSelector((state) => state.courseList);
    const { courses } = courseList;
    const dispatch =useDispatch();

    useEffect(() => {
       
        dispatch(allCourses());
      }, [dispatch]);
    
    return (
        <div >
        <div>
            <ImageSlider /> 
        </div>
        <div>
            <Heading /> 
        </div>

        <div className='container cardrow'>
            <div className='row p-0 '>
            {courses &&
            courses
              .reverse().slice(0, 4)
              .map((course) => (
                <div key={course._id} className=' col-md-3'>
                    <div className='m-2'>
                        <Card img={react} title={course.title.toUpperCase()} cardtext={course.category} viewmore={course.content}>
                        </ Card>
                    </div>
                </div>))}
            </div>
        </div>

        <div className=' my-3'>
            <Middle />
        </div>

        <div className=' my-3' >
            <Numbers />
        </div>

    </div>
    )
}

export default Home
