import Slider from "../../components/slider/Slider.jsx";
import Services from "../../components/services/Services.jsx";
import HeadingTitle from "../../components/heading-title/HeadingTitle.jsx";
import BookSlider from "../../components/book-slider/BookSlider.jsx";
import {books} from "../../data/books.js";


const HomePage=()=>{
    return (
        <div className={"home"}>

            <Slider />
            <Services />
            <HeadingTitle title={"Most Gifted"}/>
            <BookSlider data={books}/>

            <HeadingTitle title={"Best Seller"}/>
            <BookSlider data={books}/>

            <HeadingTitle title={"Most Wished For"}/>
            <BookSlider data={books}/>

        </div>
    );
}

export default HomePage;