// import React from "react";
// import "./OrderList.css";

// const OrderList = (props) => {
//   const { orders, onClick } = props;

//   // Filter orders by category
//   const foodOrders = orders.filter((order) => order.category === "Food");
//   const electronicOrders = orders.filter(
//     (order) => order.category === "ElectronicItem"
//   );
//   const skincareOrders = orders.filter(
//     (order) => order.category === "SkinCare"
//   );
//   const renderOrderItems = (orders) => {
//     return orders.map((order) => (
//       <li key={order.id}>
//         {order.OrderId} - {order.price} - {order.product} - {order.category}{" "}
//         <button type="button" onClick={() => onClick(order.OrderId, order.category)}>
//           Delete Product
//         </button>
//       </li>
//     ));
//   };
  

//   return (
//     <div className="order-list">
//       <div className="category">
//         <h2>Food Items</h2>
//         <ul>{renderOrderItems(foodOrders)}</ul>
//       </div>

//       <div className="category">
//         <h2>Electronic Items</h2>
//         <ul>
//          {renderOrderItems(electronicOrders)}
//         </ul>
//       </div>
//       <div className="category">
//         <h2>SkinCare Items</h2>
//         <ul>
//           {renderOrderItems(skincareOrders)}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default OrderList;
import React from "react";
import "./OrderList.css";

const OrderList = (props) => {
  const { orders, onClick } = props;

  const renderOrderItems = (orders) => {
    return orders.map((order) => (
      <li key={order.id}>
        {order.OrderId} - {order.price} - {order.product} - {order.category}{" "}
        <button type="button" onClick={() => onClick(order.OrderId, order.category)}>
          Delete Product
        </button>
      </li>
    ));
  };

  const categories = [...new Set(orders.map((order) => order.category))];

  return (
    <div className="order-list">
      {categories.map((category) => (
        <div className="category" key={category}>
          <h2>{category} Items</h2>
          <ul>{renderOrderItems(orders.filter((order) => order.category === category))}</ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
