import React from 'react'

const Button = (props) => {
  return (
    <button {...props} className='bg-sky-800  hover:bg-sky-700 text-white p-2 rounded-md'>
        {props.children}
    </button>
   
  )
}

export default Button