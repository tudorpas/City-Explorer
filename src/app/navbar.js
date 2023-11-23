import "./globals.css"

export default function Navbar(){
    return(
        <div className="container">
      <p>
        <a href="/homepage" className="button" >Homepage</a>
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