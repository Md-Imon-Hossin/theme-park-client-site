import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const AllOrders = ({ order }) => {
    const { productKey, _id } = order;
    console.log(order);
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        fetch('https://infinite-eyrie-27553.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    const dataFound = data.find(data => data._id === productKey)
                    setMyOrder(dataFound)
                }
            })
    }, [])

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `https://infinite-eyrie-27553.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    console.log(products)


    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://infinite-eyrie-27553.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        
                    }

                })
        }

    }
    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" className="card-img" src={myOrder?.img} />
                    <Card.Body>
                        <Card.Title className="title">{myOrder?.name}</Card.Title>
                        <p className="place">{myOrder?.places}</p>
                        <Card.Text>{myOrder?.description}</Card.Text>
                        <Button onClick={() => handleDeleteService(_id)} variant="primary">DELETE</Button>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllOrders;