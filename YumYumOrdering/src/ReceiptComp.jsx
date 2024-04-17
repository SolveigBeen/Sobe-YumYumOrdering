import TotalSum from '../components/TotalSum';

const dishes=[
  {title:'Karlstad', price:"27 SEK", number:"3"},
  {title:'HO CHI MINH', price:"18 SEK", number:"2"},
  {title:'KINGSTON', price:"18 SEK", number:"2"},
  {title:'SWEET CHILI DIP', price:"19 SEK", number:"1"},
  {title:'GUACAMOLE', price:"19 SEK", number:"1"},
]

function MenuItem () {
  return (
    <div className="order-receipt">
      <div className="order-receipt__header">
      <div className="Logo Logo--red">
      <div>Y</div> 
      <div>Y</div>
      <div>G</div>
      <div>S</div>
    </div>
        <h2>KVITTO</h2>
        <h4>#4KJWSDF234K</h4>
      </div>
      {dishes.map((dish, index)=> (
    <div key={index} >
      <div className="order-receipt__Item">
        <h3>{dish.title}</h3>
        <div className="DottedLine"></div> {/* Dotted line */}
        <h3>{dish.price}</h3>
      </div>
      <div className="order-receipt__number">
            <p style={{ color:"#353131" }}>{dish.number} stycken</p>
            </div>
           
    </div>
    ))}
   
   <TotalSum></TotalSum>
    </div>
  )
}

export default function ReceiptComp() {
  return (
    <div className="receipt__order">
      <MenuItem></MenuItem>
    
    </div>
  )
}