import React from 'react';
import './Service.css'
import './Service'
import { Link } from 'react-router-dom';
const Service = ({service}) => { 
    const {_id,name,img,description} = service 
    // handle add to cart
    const handleAddToCart = (service)=>{
      const data =  service 
      data.email = 'hero@gmail.com' 
      data.status = "pending"
      // console.log(data)
      fetch("http://localhost:5000/services",{
        method : "POST",
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(data),
      })
    }
    return (
               
        <div >
<div className="card h-100" >
<img className='img-fluid' src={img} alt="" /> 
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <Link to={`/orderPlace/${_id}`} >
    <button onClick={()=>handleAddToCart(service)} className="btn btn-primary">Buy Now </button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Service;