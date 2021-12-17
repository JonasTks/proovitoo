import React from 'react'
import "./cart.css"

const cart = ({CartItems, handleAddProduct, handleRemoveProduct}) => {

    const totalPrice = CartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
       <div className="CItems">
           <div className="CIHeader">Ostukorv</div>

           {CartItems.length === 0 && <div className="cart-empty"> Ostukorv on tühi! </div>}

           <div>
               {CartItems.map((item) =>(
                   <div key={item.id} className="list">

                       <img className="item-img"src={item.image} alt={item.name}/>
                    <div className="item-cart-name">
                        {item.name}
                    </div>
                    <div className="cart-function">
                        <button className='items-add' onClick={()=> handleAddProduct(item)}>+</button>
                        <button className='items-remove'onClick={()=> handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className='cart-i-price'>
                        {item.quantity} * {item.price}€
                    </div>
                   </div>
               ))}
           </div>
           <div className="totalprice">
               Kokku: 
               <div className="total-price"> {totalPrice}€</div>
           </div>
       </div>
       
    )
}

export default cart
