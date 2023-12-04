import React from 'react'
import home from '../../../images/lang.jpg';
import './SideImage.css';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function SideImage() {
    return (
        <div className='row'>           
            <div className=' texts text-center m-0 p-0 text-light py-5 col-md-6'>
                <h3 className='my-3 p-2 '> STUDY ANY TOPIC, ANYTIME</h3>
                <h3 className='my-2 '> ANYWHERE</h3>
                <h1  className='my-4 '><strong> Just Learn</strong></h1>
                <Link  className='my-2 ' to='./register'>
                <Button variant="outline-success">Register as Learner</Button> 
                </Link>
                </div>
            <div className='sideimage m-0 p-0 col-md-6'>
                <img src={home} alt=" laptop" />
            </div>

        </div>

    )
}

export default SideImage
