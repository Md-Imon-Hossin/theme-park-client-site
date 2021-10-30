import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import './MyOrder.css'
const MyOrder = () => {
    const email = 'hero@gmail.com'
    const [orders,setOrders] = useState([]) 
    useEffect(()=>{
        fetch(`http://localhost:5000/myOrder/${email}`) 
        .then(res=>res.json()) 
        .then(data=>setOrders(data))
    },[])
    // console.log(orders)
    return (
        <div > 
            <h3>{orders?.length}</h3>
            <div className='card-container'>
            {
               orders.map(order=><Order 
               order= {order} 
               ></Order>)  
           }
            </div>     
        </div>
    );
};

export default MyOrder;