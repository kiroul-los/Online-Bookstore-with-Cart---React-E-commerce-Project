import "./cart.css";
import OrderSummary from "./OrderSummary.jsx";
import CartItem from "./CartItem.jsx";
import {useContext} from "react";
import CartContext from "../../context/cartContext.js";


const Cart=()=>{

    const {cartItems,addToCart,removeFromCart}=useContext(CartContext);
    const totalPrice=cartItems.reduce((acc,cur)=> acc+cur.price*cur.quantity,0).toFixed(2);

    return (
        <div className={"cart"}>
            <div className={"cart-title"}>Your Shopping Cart</div>
            <div className={"cart-wrapper"}>
                <div className={"cart-items"}>
                    {cartItems.map((item)=>
                        <CartItem key={item.id} addToCart={addToCart} removeFromCart={removeFromCart} item={item}/>
                    )}
                </div>
                <OrderSummary totalPrice={(totalPrice)}/>
            </div>

        </div>
    )
}

export default Cart;