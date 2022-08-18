import { useState } from 'react'
import './dropdown.css'

function Dropdown(props) {

    var links = []

    for(const link in props.links){
        
        links.push(<a className='dropdown-link' href="#" key={link}>{props.links[link]}</a>)
    }
  

  return (
    <div className="dropdown">
                <div className="link">
                    <span>
                        {props.name}
                    </span>
                    <span>
                        <svg width={24} height={24} className="arrow">
                            <path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"></path>
                        </svg>
                    </span>
                </div>
                <div className="dropdown-content">
                    {links}
                </div>
        </div>
  )
}

export default Dropdown
