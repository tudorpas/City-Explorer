import "../css/globals.css"
import "../css/navbar.css"

export default function Navbar(){
    return(
      <>
        <div className="container">
          <img src="../icons/logo-large.png"></img>
          <p>
            <a href="/" className="button" >Home</a>
          </p>
          <p>
            <a href="/search" className="button">Search</a>
          </p>
          <p>
            <a href="/favorites" className="button">Favorites</a>
          </p>
          
        </div>
    </>
    )
}