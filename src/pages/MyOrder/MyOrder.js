
import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import AllOrders from '../../AllOrders/AllOrders';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://infinite-eyrie-27553.herokuapp.com/orders`)
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