import Menu from '../components/Menu'
import Header from '../components/Header'
import Button from '../components/Button'
import TotalSum from '../components/TotalSum'



function MyOrder(){
  return(
    <div className="orderScreen" style={{ backgroundColor: "#EEEEEE" }}>
      <Header></Header>
      <Menu></Menu>
      <div>
<TotalSum></TotalSum>
      <Button label="TAKE MY MONEY" backgroundColor="#353131"  page="/"></Button>
      </div>
      
    </div>
  )
}

export default MyOrder