function Logo() {
  return (
    <div className="Logo">
      <div>Y</div> 
      <div>Y</div>
      <div>G</div>
      <div>S</div>
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <Logo />
      <img src="Union.png" alt="cart" className="cart"/>
    </div>
  );
}

export default Header;