// import React, { useEffect, useState } from 'react';
// import Order from '../Order/Order';
// import './MyOrder.css'
// const MyOrder = () => {
//     const email = 'hero@gmail.com'
//     const [orders,setOrders] = useState([]) 
//     useEffect(()=>{
//         fetch(`https://infinite-eyrie-27553.herokuapp.com/myOrder/${email}`) 
//         .then(res=>res.json()) 
//         .then(data=>setOrders(data))
//     },[])
//     console.log(orders)
//     return (
//         <div > 
//             <h3>{orders?.length}</h3>
//             <div className='card-container'>
//             {
//                orders.map(order=><Order 
//                 key = {order._id}
//                order= {order} 
//                ></Order>)  
//            }
//             </div>     
//         </div>
//     );
// };

// export default MyOrder;




import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import AllOrders from '../../AllOrders/AllOrders';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                // console.log(data)
            })
    }, [])
    if (order.length === 0) {
        <Spinner animation="border" variant="primary" />
    }


    console.log(order)
    return (
        <div>
            <h2>My Orders</h2>
            <Row xs={1} md={2} lg={3} className="g-4 m-4">
                {
                    order.map(order => <AllOrders key={order._id} order={order}></AllOrders>)
                }
            </Row>
        </div>
    );
};

export default MyOrder;