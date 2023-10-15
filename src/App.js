import React, { useState, useEffect } from "react";
import OrderList from "./Component/OrderList";
import Order from "./Component/Order";
import './App.css'
function App() {
  const [orderList, setOrderList] = useState([]);
  const [isOrder, setIsOrder] = useState(false);

  // useEffect((oId,oProduct) => {
  //       const key = `${oId}-${oProduct}`
  //      const orderInformation =JSON.parse(localStorage.getItem(key))

  //      console.log(orderInformation)
  //      if(orderInformation===orderList){
  //       setIsOrder(true)
  //      }
  //     // setOrderList(JSON.parse(orderInformation))

  //   }, [orderList]);

  useEffect(() => {
    // Load data from local storage when the component initializes
    const dataFromStorage = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
    setOrderList(dataFromStorage);
  }, []);

    
    const addOrderHandler = (oId, oPrice, oProduct, oCategory) => {
      const newOrder = {
        OrderId: oId,
        price: oPrice,
        product: oProduct,
        category: oCategory,
        id: Math.random().toString(),
      };
      const key = `${oId}-${oProduct}`
      
      localStorage.setItem( key,JSON.stringify(newOrder));
      const updatedList = [...orderList, newOrder];
      setOrderList(updatedList);
      setIsOrder(true);
    };  
    
    const deleteOrderHandler = (oId,oProduct) => {
     
      // Generate the key based on orderId and category
    //  const updatedList = orderList.filter((order) => order.id !== oId && order.category!==oCategory);
    const key = `${oId}-${oProduct}`
      // Remove the item from localStorage using the correct key
      localStorage.removeItem(key)
      const updatedList = orderList.filter((order) => order.id !== oId && order.product!==oProduct)
     
    
      // Update the order list in the state
      
      setOrderList(updatedList);
    };
    

   
    return (
      <div className="App">
      <Order onOrder={addOrderHandler}></Order>
      
      <OrderList
        orders={orderList}
        onOrder={isOrder}
        onClick={deleteOrderHandler}
      ></OrderList>
      
    </div>
    
  );
}
export default App;