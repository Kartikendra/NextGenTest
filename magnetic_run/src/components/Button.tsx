import React from 'react'

interface Button extends React.HTMLAttributes<HTMLButtonElement> {
    label : string,
    className : string,
    disabled : boolean
}
const Button = ({label , className , disabled} : Button) => {
  return (
    <button className={className} disabled = {disabled}>{label}</button>
  )
}

export default Button