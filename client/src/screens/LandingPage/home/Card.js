import React,{useState} from 'react'
import './card.css';
import {Button, Collapse} from 'react-bootstrap';
function Card(props) {

    const [open, setOpen] = useState(false);

    return (
        <div className='homecard'>
            
            <div className="card my-5" >
                <img className="card-img-top fluid" src={props.img} alt="Card cap" />
                <div className="card-body text-center">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.cardtext}</p>
                    <Button
        variant='outline-success'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       View More
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {props.viewmore}
        </div>
      </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Card
