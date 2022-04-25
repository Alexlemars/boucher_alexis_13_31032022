import React from 'react'


export default function SignInput({className, label , fors , type , id ,onChange,name,value,validations})  {
  return (
    
        <div className={className}>
            <label htmlFor={fors}>{label}</label>
            <input type={type} name={name} id={id} onChange={onChange} value={value} validations={validations} />
          </div>
    
  )
}
