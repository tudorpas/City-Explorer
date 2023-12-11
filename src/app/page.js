import Navbar from "./components/navbar"
import './css/globals.css'


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mainpage-container">
        <h1 className="website-name">City Explorer</h1>
        <p className="website-description">is a web application for searching various cities around the world and get info about location and weather</p>
      </div>
      <div>
        <footer className="footer-main">
          Developed by Tudor Pas
        </footer>
      </div>
    </>

  )
}
