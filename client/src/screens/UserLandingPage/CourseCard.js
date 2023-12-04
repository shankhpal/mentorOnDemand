import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import bxAlignRight from '@iconify-icons/bx/bx-align-right';
import bxBitcoin from '@iconify-icons/bx/bx-bitcoin';
import bxCloudDownload from '@iconify-icons/bx/bx-cloud-download';

import './CourseCard.css'
function CourseCard() {
    return (
        <div className='coursecard'>
            <div className='row'>
            <div className='col-md-4' >
            <div className='greencard mt-2'>
               <h1 className='text-left text-light p-4'><strong>Why Choose e-Learning ?</strong></h1>
               <p className='px-4 text-light'>Here are just some of the reasons why you should choose e-learning and blended learning as an option: e-learning training courses are extremely cost-efficient with classroom and instructor costs continuing to increase, plus travel / refreshment / staff cover, e-learning makes obvious sense at a fraction of the cost.</p>
               
            </div>
            </div>
            <div className='col-md-8'>
            <div className='row'>
                        <div className='col-sm-4 mt-3'>
                            <div className='whitecard border text-center mx-2 my-4'>
                                <div className="test rounded-circle text-center my-4 mx-auto p-4">
                                    <Icon icon={bxAlignRight} color='#5fcf80' width="50px" height="50px" />
                                </div>
                                <div>
                                    <h2 className='text-center'><strong>ACCESS</strong></h2>
                                    <p className='text-center py-5 px-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 mt-3'>
                            <div className='whitecard border text-center mx-2 my-4'>
                                <div className="test rounded-circle text-center my-4 mx-auto p-4">
                                    <Icon icon={bxCloudDownload} color="#5fcf80" width="50px" height="50px" />
                                </div>
                                <div>
                                    <h2 className='text-center'><strong>REMOTE</strong></h2>
                                    <p className='text-center py-5 px-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 mt-3'>
                            <div className='whitecard border text-center mx-2 my-4'>
                                <div className="test rounded-circle text-center my-4 mx-auto p-4">
                                     <Icon icon={bxBitcoin} color="#5fcf80" width="50px" height="50px" />
                                </div>
                                <div>
                                    <h2 className='text-center'><strong>EARN</strong></h2>
                                    <p className='text-center py-5 px-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>

               
            </div>
            </div>
        </div>
        </div>
    )
}

export default CourseCard
