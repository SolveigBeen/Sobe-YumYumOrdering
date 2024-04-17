import { useState } from "react";

export default function OrderItem2({ title, price, onOrderSumChange }) {
  const [count, setCount] = useState(0);

  // Function to calculate order sum and update the total sum
  function updateOrderSum(newCount) {
    const orderSum = price * newCount;
    onOrderSumChange(orderSum);
  }

  // Function to handle incrementing count and updating orderSum
  function handleAddClick() {
    const newCount = count + 1;
    setCount(newCount);
    updateOrderSum(newCount);
  }

  // Function to handle decrementing count and updating orderSum
  function handleSubClick() {
    const newCount = Math.max(count - 1, 0);
    setCount(newCount);
    updateOrderSum(newCount);
  }

  // Calculate orderSum
  const orderSum = price * count;

  return (
    <div className="MenuItem">
      <div className="DishItem">
        <h3>{title}</h3>
        <div className="DottedLine"></div> {/* Dotted line */}
        <h3>{orderSum}</h3>
      </div>
      <AddSubButton handleAddClick={handleAddClick} handleSubClick={handleSubClick} count={count} />
    </div>
  );
}

function AddSubButton({ handleAddClick, handleSubClick, count }) {
  return (
    <div className="orderNumber">
      <button className="orderMenu__button" onClick={handleAddClick}>
        +
      </button>
      <p className="font-black">{count} stycken</p>
      <button className="orderMenu__button" onClick={handleSubClick}>
        -
      </button>
    </div>
  );
}

