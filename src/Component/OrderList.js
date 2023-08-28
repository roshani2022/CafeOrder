import React from "react";
import './OrderList.css'
const OrderList = (props) => {
  return (
    <div className="order-list"> 
      <ul>
        {props.orders.map((order) => (
          <li key={order.id}>
            {order.OrderId}
            {order.price}
            {order.product}
            {order.category}
            <button type="button" onClick={() => props.onClick(order.id)}>
              Delete Product
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default OrderList;
