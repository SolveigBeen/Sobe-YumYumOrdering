import { useState } from "react";
import OrderList from '../components/OrderList'
import Header from '../components/Header'
import Button from '../components/Button'
import TotalSum from '../components/TotalSum'



function MyOrder(){
  const [totalSum, setTotalSum] = useState(0);
  return(
    <div className="orderScreen" style={{ backgroundColor: "#EEEEEE" }}>
      <Header></Header>
      <OrderList onTotalSumChange={setTotalSum} ></OrderList>
    <div>
      <TotalSum total={totalSum}></TotalSum>
      <Button label="TAKE MY MONEY" backgroundColor="#353131"  page="/"></Button>
      </div>
      
    </div>
  )
}

export default MyOrder