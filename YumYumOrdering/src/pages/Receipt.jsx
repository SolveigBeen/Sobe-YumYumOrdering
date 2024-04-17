import Header from '../components/Header';
import Button from '../components/Button'
import ReceiptComp from '../components/ReceiptComp';


export default function Receipt(){
  return(
    <div className="orderScreen" style={{ backgroundColor: "#605858" }}>
      <Header></Header>
      <ReceiptComp></ReceiptComp>
      <Button label="GÖR EN NY BESTÄLLNING" backgroundColor="#353131" page="/" ></Button>
      </div>
  )
}