
import React from "react";
import OrderItem2 from "./OrderItem2";

export default function OrderList({ onTotalSumChange }) {
  const dishes = [
    { title: "Karlstad", price: 9 },
    { title: "HO CHI MINH", price: 9 },
    { title: "KINGSTON", price: 9 },
    { title: "SWEET CHILI DIP", price: 19 },
    { title: "GUACAMOLE", price: 19 },
  ];

  // Function to update the total sum
  const handleOrderSumChange = (orderSum) => {
    onTotalSumChange((prevTotal) => prevTotal + orderSum);
  };

  return (
    <div>
      {dishes.map((dish, index) => (
        <OrderItem2
          key={index}
          title={dish.title}
          price={dish.price}
          onOrderSumChange={handleOrderSumChange} // Pass the function to update the total sum
        />
      ))}
    </div>
  );
}
