import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import React from 'react'
import './middle.css'
function Middle() {
    return (
        <div className='container middle mb-5 mt-5'>
            <div className='row'>
                <div className='rw col-md-8'>
                    <h2>Get ahead with Learning paths</h2>
                    <p>udheudhewud iudeid eiudweid iduweoduwe udjewiudjiweo kdsjhied</p>
                    <p>udheudhewud iudeid eiudweid iduweoduwe</p>
                </div>
                <div className='bt col-md-4'>
                    <Link to='/register'>
                <Button variant="outline-light"><strong>Register Here</strong></Button> 
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Middle
