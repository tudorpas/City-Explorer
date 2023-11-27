import "../css/globals.css"
import "../css/navbar.css"

export default function Navbar(){
    return(
        <div className="container">
      <p>
        <a href="/" className="button" >Home</a>
      </p>
      <p>
        <a href="/search" className="button">Search</a>
      </p>
      <p>
        <a href="/citypage" className="button">Citypage</a>
      </p>
      <p>
        <a href="/favorites" className="button">Favorites</a>
      </p>
    </div>
    )
}