const OrderSummary=({totalPrice})=>{
    return(
        <div className={"cart-order-summary"}>
            <div className={"order-summary-title"}> Order Summary</div>
            <div className={"order-summary-item"}>
                <span> Subtotal </span>
                <span> ${totalPrice} </span>
            </div>
            <div className={"order-summary-item"}>
                <span> Shopping Cost </span>
                0
            </div>
            <div className={"order-summary-item"}>
                <span> Discount </span>
                0
            </div>
            <div className={"order-summary-item"}>
                <span> Total </span>
                <span> ${totalPrice} </span>
            </div>
        </div>
    );
}
export default OrderSummary;