import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../context/useAuth';
import './OrderPlace.css'
const OrderPlace = () => {
    const { user } = useAuth();
    console.log(user);
    const { serviceId } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`https://infinite-eyrie-27553.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data)
            })
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("https://infinite-eyrie-27553.herokuapp.com/orders", data)
            .then(res => console.log(res))
        // .then(result => console.log(result))
    };

    return (
        <div className='form-container'>
           
           <Col>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="">Your Name :</label>
                                <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName}  />
                            </div>
                            <div>
                                <label htmlFor="">Your Email :</label>
                                <input {...register("email")} defaultValue={user.email}  />
                            </div>
                            <div>
                                <label htmlFor=""> Address :</label>
                                <input {...register("address")}  />
                            </div>
                            <div>
                                <label htmlFor="">Phone :</label>
                                <input type="tel" {...register("Phone")}  />
                            </div>
                            <div>
                                <label htmlFor="">Product Key :</label>
                                <input {...register("productKey")} defaultValue={serviceId}  />
                            </div>

                            <div>
                                <label htmlFor="">Destination :</label>
                                <input {...register("place")} defaultValue={order.name}  />
                            </div>
        
                            <div>
                            <input className="btn btn-primary" type="submit" value="Place Order" />
                            </div>

                        </form>
                    </Col>

        </div>
    );
};

export default OrderPlace;