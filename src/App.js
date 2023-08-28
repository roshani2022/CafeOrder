import "./App.css";
import React, { useState, useEffect } from "react";
import OrderList from "./Component/OrderList";
import Order from "./Component/Order";

function App() {
  const [orderList, setOrderList] = useState([]);

  const [isOrder, setIsOrder] = useState(false);

  useEffect(() => {
  const loadedOrders = [];
  setOrderList(loadedOrders);
    const orderInformation = localStorage.getItem("isOrder");
    if (orderInformation === "1") {
      setIsOrder(true);
    }
  }, []);
 

  const addOrderHandler = (oId, oPrice, oProduct, oCategory) => {
    // setOrderList((prevList)=>{
    //   const updatedList= [
    //     ...prevList,
    //     {OrderId:oId,price:oPrice,product:oProduct,category:oCategory, id: Math.random().toString() },
    //   ]
    //   localStorage.setItem(oId.toString, JSON.stringify(updatedList));
    //   setIsOrder(true)
    //   return updatedList;

    // })
    const newOrder = {
      OrderId: oId,
      price: oPrice,
      product: oProduct,
      category: oCategory,
      id: Math.random().toString(),
    };
    localStorage.setItem(oId.toString(), JSON.stringify(newOrder));
    const updatedList = [...orderList, newOrder];
    setOrderList(updatedList);
    setIsOrder(true);
  };
  const deleteOrderHandler = (orderId) => {
    const updatedList = orderList.filter(order => order.OrderId !== orderId);
    setOrderList(updatedList);
    localStorage.removeItem(orderId.toString()); 
    
    localStorage.setItem("orderList", JSON.stringify(updatedList));

  };

  return (
    <div className="App">
      <Order onOrder={addOrderHandler}></Order>
      {<h1>Product</h1>}
      <OrderList
        orders={orderList}
        onOrder={isOrder}
        onClick={deleteOrderHandler}
      ></OrderList>
    </div>
  );
}

export default App;
