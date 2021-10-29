import React from 'react';
import './Service.css'
import './Service'
import { Link } from 'react-router-dom';
const Service = ({service}) => { 
    const {_id,name,img,description} = service 
    return (
               
        <div >
<div className="card h-100" >
<img className='img-fluid' src={img} alt="" /> 
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <Link to={`/orderPlace/${_id}`} >
    <button
      className="btn btn-primary">Details {name} </button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Service;