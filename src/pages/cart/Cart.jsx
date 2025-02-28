import{cartInfo} from "../../data/cart.js";
import "./cart.css";
import OrderSummary from "./OrderSummary.jsx";
import CartItem from "./CartItem.jsx";


const Cart=()=>{
    const totalPrice=cartInfo.reduce((acc,cur)=> acc+cur.price*cur.quantity,0);

    return (
        <div className={"cart"}>
            <div className={"cart-title"}>Your Shopping Cart</div>
            <div className={"cart-wrapper"}>
                <div className={"cart-items"}>
                    {cartInfo.map((item)=>
                        <CartItem key={item.id} item={item}/>
                    )}
                </div>
                <OrderSummary totalPrice={totalPrice}/>
            </div>

        </div>
    )
}

export default Cart;