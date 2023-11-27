import "../css/globals.css"
import Navbar from "../components/navbar"

export default function Favorites(){
    return(
        <div>
            <Navbar></Navbar>
            <h1>Favorites</h1>
            <p>
                <a href="/" className="button">Back</a>
            </p>
        </div>
    )
}