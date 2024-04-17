
export default function TotalSum({ total }){
  return (
    <div className="total-container" >
      <div class="totalt-placeholder">
        <h3>TOTALT</h3>
        <p className="font-small">inkl 20% moms</p>
      </div>
     <h2 style={{ color: "#353131" }}>{ total } SEK</h2>
  </div>
  )
}