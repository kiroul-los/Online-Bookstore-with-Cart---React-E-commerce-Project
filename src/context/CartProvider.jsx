import CartContext from "./cartContext";
import {useState} from "react";
import cartItem from "../pages/cart/CartItem.jsx";

const CartProvider=({children})=>{
    
    const[cartItems,setCartItems]=useState([]);

    const addToCart=(item)=>{
        const isExist=cartItems.find(cart=>cart.id===item.id);
        if(isExist){
            setCartItems(
                cartItems.map((cartItem)=>cartItem.id===item.id?item:cartItem)
            );
        }else{
            setCartItems(prev=>[...prev,item])
        }

    }

    const removeFromCart = (id) => {
        setCartItems(cartItems
            .map(cartItem =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
            .filter(cartItem => cartItem.quantity > 0)
        );
    };





    
    return(
        <CartContext.Provider value={{
            cartItems,addToCart,removeFromCart,
            cartItemsLength:cartItems.length,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;