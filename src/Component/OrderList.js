import React from "react";
import "./OrderList.css";

const OrderList = (props) => {
  const { orders, onClick } = props;

  // Filter orders by category
  const foodOrders = orders.filter((order) => order.category === "Food");
  const electronicOrders = orders.filter(
    (order) => order.category === "ElectronicItem"
  );
  const skincareOrders = orders.filter(
    (order) => order.category === "SkinCare"
  );

  return (
    <div className="order-list">
      <div className="category">
        <h2>Food Items</h2>
        <ul>
          {foodOrders.map((order) => (
            <li key={order.id}>
              {order.OrderId} -{order.price} -{order.product} -{order.category}{" "}
              -
              <button type="button" onClick={() => onClick(order.id,order.category)}>
                Delete Product
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="category">
        <h2>Electronic Items</h2>
        <ul>
          {electronicOrders.map((order) => (
            <li key={order.id}>
              {order.OrderId} -{order.price} -{order.product} -{order.category}{" "}
              -
              <button type="button" onClick={() => onClick(order.id)}>
                Delete Product
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="category">
        <h2>SkinCare Items</h2>
        <ul>
          {skincareOrders.map((order) => (
            <li key={order.id}>
              {order.OrderId} -{order.price} -{order.product} -{order.category}{" "}
              -
              <button type="button" onClick={() => onClick(order.id)}>
                Delete Product
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderList;
