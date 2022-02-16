import React from "react"
import portrait from "../images/portrait.jpg"

export default function Navbar() {
    return (
        <nav>
            <img src={portrait} alt="face of man" className="header--photo" />
            <h2 className="header--name">Tomasz Jasiński</h2>
            <h3 className="header--title">Frontend Developer</h3>
            <button className="header--button">Email</button>
        </nav>
    )
}