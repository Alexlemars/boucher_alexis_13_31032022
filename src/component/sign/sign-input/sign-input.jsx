import React from 'react'


export default function SignInput({className, label , fors , type , id})  {
  return (
    
        <div className={className}>
            <label for={fors}>{label}</label>
            <input type={type} id={id} />
          </div>
    
  )
}
