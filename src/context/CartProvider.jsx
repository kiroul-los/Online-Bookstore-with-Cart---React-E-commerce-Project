import CartContext from "./cartContext";
import {useState} from "react";

const CartProvider=({children})=>{
    
    const[cartItem,setCartItem]=useState([]);

    const addToCart=(item)=>{
        setCartItem(prev=>[...prev,item])
    }
    
    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;