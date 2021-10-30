import { useParams } from 'react-router';

const OrderPlace = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Please Order Now{serviceId} </h2>  
        </div>
    );
};

export default OrderPlace;