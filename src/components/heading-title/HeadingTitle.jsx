const HeadingTitle=({title})=>{
    return(
        <div style={divStyle}>
            <h2 style={h2Styles}>{title}</h2>
        </div>
    );
}

export default HeadingTitle;

const divStyle={
    padding:"10px 30px",
    backgroundColor:"#fff"
}

const h2Styles={
    color:"#1926d2",
    fontSize:"30px",
    fontWeight:"500",
    borderBottom:"2px solid #1926d2",
    width: "max-content",
    paddingBottom:"5px",
}