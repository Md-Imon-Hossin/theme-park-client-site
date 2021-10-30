import './Order.css'
const Order = ({order}) => { 
    const {name,img,description} = order
    return (
        <div>  
          <div className="card" >
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <button
      className="btn btn-primary">Delete</button>
  </div>
</div>
</div>
    );
};
export default Order;