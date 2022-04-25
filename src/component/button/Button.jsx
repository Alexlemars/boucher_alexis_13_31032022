import React from 'react'

export default function Button({ type, className, value }) {
  return (
    <div>
          <input className={className} type={type} value={value}></input>
    </div>
  )
}
