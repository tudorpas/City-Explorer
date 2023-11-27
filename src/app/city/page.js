import "../css/globals.css"
import Navbar from "../components/navbar"

export default function Citypage(){
    return (
        <div>
            <Navbar></Navbar>
            <h1>City Page</h1>
            <p>
                <a href="/" className="button">Back</a>
            </p>
        </div>
    )
}