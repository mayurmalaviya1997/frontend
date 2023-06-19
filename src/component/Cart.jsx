
import React, {useContext} from 'react'
import { UserData } from './Home'

const Cart = () => {

    const cartData = useContext(UserData)
  return (
    <div>

        <h1>cart</h1>
        <h1>a {console.log(cartData)}</h1>
    </div>
  )
}

export default Cart