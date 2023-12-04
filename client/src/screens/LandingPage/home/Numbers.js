import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './Numbers.css'

function Numbers() {
    const [userCount, setUserCount] = useState(null)
    const [coursesCount, setCoursesCount] = useState(null)
    const [mentorsCount, setMentorsCount] = useState(null)
     
    useEffect(()=>{
        const fetchData = async()=>{
           const { data} = await axios.get('/api/users/count');
           setUserCount(data.userCount);
           setCoursesCount(data.courseCount);
           setMentorsCount(data.mentorCount);
        }

        fetchData();
      
    })


    return (
        <div className='container numbers'>
            <div className='row'>
                <div  className='col-md-4'>
                    <div className='m-2 p-2'>
                        <h1 className='text-center text-success'><strong>{coursesCount}</strong></h1>
                        <h2 className='text-center P-2'><strong>COURSES</strong></h2>
                    </div>
                </div>
                <div  className='col-md-4'>
                    <div className='m-2 p-2'>
                        <h1 className='text-center text-success'><strong>{mentorsCount}</strong></h1>
                        <h2 className='text-center P-2'><strong>MENTORS</strong></h2>
                    </div>
                </div>
                <div  className='col-md-4'>
                    <div className='m-2 p-2'>
                        <h1 className='text-center text-success'><strong>{userCount}</strong></h1>
                        <h2 className='text-center P-2'><strong>ENROLLMENTS</strong></h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Numbers
