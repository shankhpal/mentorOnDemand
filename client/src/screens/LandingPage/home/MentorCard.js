import React from 'react'
import teach from '../../../images/code.jpg'
import './mentor.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function MentorCard() {
    return (
        <div className='row '>
            <div className='col-md-6 im'>
                <img src={teach} alt='empty' />
            </div>
            <div className='col-md-6 mentor py-5 text-light text-center'>
                <h1 className='py-4'>Teach on One Minus</h1>
                <h3>MORE THAN 5000 TRAINER ENROLLED</h3>
                <p>Get yourself enrolled today,</p>
                <p>Register below</p>
                <Link to='./register'>
                <Button className='my-3' variant="outline-success"><strong>Register as Mentor</strong></Button>
                </Link>
                
            </div>
            
        </div>
    )
}

export default MentorCard
