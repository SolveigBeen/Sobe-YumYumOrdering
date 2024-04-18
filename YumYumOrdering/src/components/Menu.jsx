
const dishes=[
  {title:'Karlstad', price:"9 SEK", ingred:"kantarell, sharlottenlök, morot, persilja"},
  {title:'HO CHI MINH', price:"9 SEK", ingred:"kantarell, sharlottenlök, morot, persilja"},
  {title:'KINGSTON', price:"9 SEK", ingred:"kantarell, sharlottenlök, morot, persilja"},
  {title:'SWEET CHILI DIP', price:"9 SEK", ingred:"kantarell, sharlottenlök, morot, persilja"},
  {title:'GUACAMOLE', price:"9 SEK", ingred:"kantarell, sharlottenlök, morot, persilja"},
]

const summa = 101;

function MenuItem () {
  return (
    <div>
      {dishes.map((dish, index)=> (
    <div key={index} className="MenuItem">
      <div className="DishItem MenuItem-style">
        <h3>{dish.title}</h3>
        <div className="DottedLine"></div> {/* Dotted line */}
        <h3>{dish.price}</h3>
      </div>
      <div className="menu-ingred">
            <p >{dish.ingred} stycken</p>
           </div>
    </div>
    ))}
    </div>
  )
}

export default function Menu({summa}) {
  return (
    <div className="menu">
      <h2>MENY</h2>
      <MenuItem></MenuItem>
    </div>
  )
}