import React from "react"
import fb from "../images/fb.png"
import lin from "../images/lin.png"
import tw from "../images/tw.png"

export default function Navbar() {
    return (
        <footer>
            <img src={fb} alt="facebook icon" className="footer--icon" />
            <img src={lin} alt="linkedin icon" className="footer--icon" />
            <img src={tw} alt="twitter icon" className="footer--icon" />
        </footer>
    )
}