import React from 'react'
import './NavigationButton.css'

const NavigationButton = (props) => {
  //(props)
  return (
    <>
        <button onClick={props.onClick} 
          className={ `navigationButton ${props.direction} ${props.active ? 'active' : 'inactive'} ${props.class ? props.class : ''}`} >
            {props.text}
        </button>
    </>
)
}

export default NavigationButton