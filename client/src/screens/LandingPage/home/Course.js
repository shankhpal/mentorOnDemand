import React from 'react'
import { Button, Collapse } from 'react-bootstrap';
import { Icon, InlineIcon } from '@iconify/react';
import bxAlignRight from '@iconify-icons/bx/bx-align-right';
function Course(props) {
    return (
        <div>
            <div className='row'>
            <div className='col-sm-3 mt-3'>
                            <div className='whitecard border text-center mx-2 my-4'>
                                <div className="test rounded-circle text-center my-4 mx-auto p-4">
                                    <Icon icon={bxAlignRight} color='#5fcf80' width="50px" height="50px" />
                                </div>
                                <div>
                                    <h2 className='text-center'><strong>{props.title}</strong></h2>
                                    <p className='text-center py-5 px-2 '>
                                    <Button
                                            variant='outline-warning'
                                            onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}>  
                                    </Button>
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                            <h2><strong>{props.category}</strong></h2>
                                            <p>{props.content}</p>
                                        </div>
                                    </Collapse>
               
                                    </p>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Course
