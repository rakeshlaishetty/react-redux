import React from "react";
import '../../src/App.css'
const Home = () => {
  return (
    <>
    <div className="add-to-cart">
        <img src="https://static.vecteezy.com/system/resources/previews/006/635/854/large_2x/add-to-cart-hand-drawn-doodle-shopping-icon-free-vector.jpg"/>
    </div>
      <div className="cart-wrapper">
        <div className="img-wrapper">
          <img
            src="https://m.media-amazon.com/images/I/314Rp+8XKWL._SX342_SY445_.jpg"
            alt="iphone"
          />
        </div>
        
          <div className="text-wrapper">
            <span style={{
                color:"white",
                padding:'10px',
                margin:"10px",
                backgroundColor:"red"
                }}>I-Phone </span>
            <span>Price: $1000</span>
          </div>
        
        <div className="cart-button-wrapper">
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};
export default Home;
