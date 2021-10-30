import React from 'react';
import './Order.css'
const Order = ({order}) => { 
    const {name,img,description} = order
    return (
        <div>
            
          <div class="card" >
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{description}</p>
    <button class="btn btn-primary">Go someWhere</button>
  </div>
</div>
</div>


    );
};

export default Order;