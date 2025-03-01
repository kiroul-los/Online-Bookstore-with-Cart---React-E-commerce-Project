import {authors} from "../../data/authors.js";
import "./authors.css";
import {useState} from "react";

const Authors=()=>{

    const [search,setSearch]=useState("");
    console.log();

    return (
        <section className={"authors"}>
            <div className={"authors-search-wrapper"}>
                <input value={search} onChange={e=>setSearch(e.target.value)} type={"search"} placeholder={"search in authors"}/>
            </div>
            <div className={"authors-wrapper"}>
                {authors.filter(a=>a.name.toLowerCase().includes(search))
                    .map(author=>
                    <div key={author.id} className={"author"}>
                        <img className={"author-img"} src={author.image} alt={author.name} />
                        <h2 className={"author-name"}> {author.name} </h2>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Authors;