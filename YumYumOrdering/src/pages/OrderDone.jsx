import Button from '../components/Button'
import Header from '../components/Header';
import MainOrderDone from '../components/MainOrderDone';
import '../App.css'

export default function OrderDone() {
  return (

    <div className="orderScreen" style={{ backgroundColor: "#489078" }}> 
      <Header></Header>
    <MainOrderDone></MainOrderDone>
      <div>
       <Button label="BESTÄLL MER" backgroundColor="#353131" page="/MyOrder" ></Button>
       <Button label="SE KVITTO" border="2px solid white" page="/Receipt"></Button>
      </div>
   </div>

  )
}