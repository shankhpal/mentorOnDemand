import React from 'react'
import trainer1 from '../../../images/trainer-1.jpg';
import { Button, Image, Card } from 'react-bootstrap'
import trainer2 from '../../../images/trainer-2.jpg';
import trainer3 from '../../../images/trainer-3.jpg';
import './TopMentor.css'

function TopMentors() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='p-4'>
                        <Card className='topmentor'>
                            <Card.Img variant="top" src={trainer1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-4'>
                        <Card className='topmentor'>
                            <Card.Img variant="top" src={trainer2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='p-4'>
                        <Card className='topmentor'>
                            <Card.Img variant="top" src={trainer3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMentors
