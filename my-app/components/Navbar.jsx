import React from 'react'
import Link from 'next/link'
// import {AioutlineShopping} from "react-icons/ai"

const Navbar = () => {
  return (
    <div  className='nav-bar-container' >
    <p  className='logo'>

      <Link  href="/" >
        JUlIUS
      </Link>
    </p>
    <button  type = "button"  className='cart-icon' onClick="" >
      {/* <AioutlineShopping /> */}
      <span className='cart-item-qty' > 1</span>
    </button>
    
    </div>
  )
}

export default Navbar