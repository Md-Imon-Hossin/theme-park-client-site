import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services,setServices] = useState([]) 
    useEffect(()=>{
        fetch('https://infinite-eyrie-27553.herokuapp.com/services') 
        .then(res=>res.json()) 
        .then(data=>setServices(data))
    },[])
    
    return (
        <div className='py-4'>
            <h3 className='text-primary mb-4'>Our Services</h3>
            { services.length ===0 ?
      <Spinner animation="border" variant="danger" />
            :
                <div className='services-container'>
            {
                services.map(service=><Service
                     key={service._id}
                     service={service} 
                > 
                </Service>)
            }
            </div>}
        </div>
    );
};
export default Services;