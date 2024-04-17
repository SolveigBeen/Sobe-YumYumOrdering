
const dishes=[
  {title:'Karlstad', price:"27 SEK", number:"3"},
  {title:'HO CHI MINH', price:"18 SEK", number:"2"},
  {title:'KINGSTON', price:"18 SEK", number:"2"},
  {title:'SWEET CHILI DIP', price:"19 SEK", number:"1"},
  {title:'GUACAMOLE', price:"19 SEK", number:"1"},
]

const summa = 101;

function MenuItem () {
  return (
    <div>
      {dishes.map((dish, index)=> (
    <div key={index} className="MenuItem">
      <div className="DishItem">
        <h3>{dish.title}</h3>
        <div className="DottedLine"></div> {/* Dotted line */}
        <h3>{dish.price}</h3>
      </div>
      <div className="orderNumber">
      <img src="plus-button.png" alt="cart" className="plus" style={{ width:"24px", height:"24px" }}></img>
      <p style={{ color:"#353131" }}>{dish.number} stycken</p>
      <img src="minus-button.png" alt="cart" className="minus" style={{ width:"24px", height:"24px" }}></img>
      </div>
    </div>
    ))}
    </div>
  )
}

export default function Menu({summa}) {
  return (
    <div className="menu">
      <MenuItem></MenuItem>
    </div>
  )
}