import React from "react";
import "./OrderList.css";
import Card from "./UI/Card";
import Button from "./UI/Button";

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
  const renderOrderItems = (orders) => {
    return orders.map((order) => (
      <li key={order.id}>
        {order.OrderId} - {order.price} - {order.product} - {order.category}{" "}
        <Button
          type="button"
          onClick={() => onClick(order.OrderId,order.product)}
        >
           Delete Product
        </Button>
      </li>
    ));
  };

  return (
    <Card className="order-list">
      {<h1>Product</h1>}
      <div className="category">
        <h2>Food Items</h2>
        <ul>{renderOrderItems(foodOrders)}</ul>
      </div>
      <div className="category">
        <h2>Electronic Items</h2>
        <ul>{renderOrderItems(electronicOrders)}</ul>
      </div>
    <div className="category">
        <h2>SkinCare Items</h2>
      <ul>{renderOrderItems(skincareOrders)}</ul>
    </div>{" "}
   </Card>
  );
};

export default OrderList;

// const OrderList = (props) => {
//   const { orders, onClick } = props;

//   const renderOrderItems = (orders) => {
//     return orders.map((order) => (
//       <li key={order.id}>
//         {order.OrderId} - {order.price} - {order.product} - {order.category}{" "}
//         <Button type="button" onClick={() => onClick(order.OrderId, order.category)}>
//           Delete Product
//         </Button>
//       </li>
//     ));
//   };

//   const categories = [...new Set(orders.map((order) => order.category))];

//   return (
//     <Card className="order-list">
//       {<h1>Product</h1>}
//       {categories.map((category) => (
//         <div  key={category}>
//           <h2>{category} Items</h2>
//           <ul className="category">{renderOrderItems(orders.filter((order) => order.category === category))}</ul>
//         </div>
//       ))}
//     </Card>
//   );
// };

// export default OrderList;
