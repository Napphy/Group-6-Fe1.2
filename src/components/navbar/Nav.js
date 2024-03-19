import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                        <Link to="/bautista" className="link">Bautista</Link>
                    </li>
                    <li>
                        <Link to="/caranay" className="link">Caranay</Link>
                    </li>
                    <li>
                        <Link to="/domingo" className="link">Domingo</Link>
                    </li>
                    <li>
                        <Link to="/enciso" className="link">Enciso</Link>
                    </li>
                    <li>
                        <Link to="/gavino" className="link">Gavino</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav