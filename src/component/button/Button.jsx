import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ path, className, text }) {
  return (
    <div>

          <Link to={path} >
              <button className={className}>{text}</button> 
          </Link>
        
    </div>
  )
}
