import './App.css'
import Header from "./components/header/header";
import Footer from "./components/footer/Footer.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/forms/Login.jsx";
import Register from "./pages/forms/Register.jsx";
import Authors from "./pages/authors/Authors.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Book from "./pages/book/Book.jsx";

function App() {

  return (
    <BrowserRouter>
          <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/book/:id" element={<Book />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
          <Footer />
    </BrowserRouter>
  )
}

export default App
