import {useParams} from "react-router-dom";
import{books} from "../../data/books.js";
import Rating from "../../components/book-slider/Rating.jsx";
import "./book.css";
import {useContext, useState} from "react";
import CartContext from "../../context/cartContext.js";

const Book=()=>{

    const {addToCart}=useContext(CartContext);

    const {id}=useParams();
   const book= books.find((b)=>b.id===parseInt(id));


    const[qty,setQty] =useState(1);

    return (

        <div className={"book"}>
            <div className="book-content">
                <img className={"book-content-img"} src={`/books/${book.image}`} alt={book.title}/>
                < div className="book-content-info">
                    <h1 className={"book-title"}>{book.title}</h1>
                    <div className={"book-author"}>
                        by <span>{book.author}</span> (Author)
                    </div>

                <Rating rating={book.rating} reviews={book.reviews} />
                <div className="book-add-to-cart">
                    <input
                        className={"book-add-to-cart-input"} type={"number"} min={"1"} max={"100"}
                        value={qty}
                        onChange={e=>setQty(parseInt(e.target.value))}
                    />
                    <button onClick={()=>addToCart({...book,quantity:qty})} className={"book-add-to-cart-btn"}>
                        <i className={"bi bi-cart-plus"}></i>
                        Add To Cart
                    </button>
                </div>
                </div>
            </div>
            <p className={"book-description"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore eos, error eveniet minima necessitatibus quas quidem quis vitae voluptate. Deserunt eligendi fuga harum inventore mollitia obcaecati optio quos reiciendis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur debitis dicta, enim et harum in inventore ipsam ipsum nihil officiis optio similique tenetur. Cum dolore itaque necessitatibus ratione sapiente!
            </p>

            <div className={"book-icons"}>
                <div className={"book-icon"}>
                    <small>Print Length</small>
                    <i className={"bi bi-file-earmark-break"}></i>
                    <b>{book.printLength}</b>
                </div>
                <div className={"book-icon"}>
                    <small>Language</small>
                    <i className={"bi bi-globe"}></i>
                    <b>{book.language}</b>
                </div>
                <div className={"book-icon"}>
                    <small>Publication Date</small>
                    <i className={"bi bi-calendar3"}></i>
                    <b>{book.PublicationDate}</b>
                </div>
            </div>
        </div>
    );
}

export default Book;