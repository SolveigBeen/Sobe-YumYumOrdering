import Header from '../components/Header'
import Button from '../components/Button'
import Menu from '../components/Menu'


function Meny(){
  return(
    <div className="orderScreen menyBackground" style={{ backgroundColor: "#8Ed8bf" }}>
 <Header></Header>
<Menu></Menu>
 <Button label="TAKE MY MONEY" backgroundColor="#353131"  page="/MyOrder"></Button>
    
    </div>
  )
}

export default Meny