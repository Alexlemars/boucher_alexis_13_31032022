import React from 'react'

export default function Button({ type, className,onClick,value }) {
  return (
    <div>
          <button className={className} type={type} onClick={onClick} value={value}>{value}</button>
    </div>
  )
}
