import { blue } from '@mui/material/colors';
import React from 'react';

function Home() {
  return (
    <div> 
      <center><h1>Welcome to our Store</h1></center><br/>
      <div style={{display:"flex"}}>
      <div style={{height:"380px", width:"50%",flex:1}}><br/><br/>
      <center><h1 >Discover the best products at unbeatable prices</h1><br/><br/>
      <h3 style={{color:"red"}}>SHOP NOW</h3></center>
        </div>

        <div style={{height:"380px", width:"60%"}}>
          <center><img src='https://cdn2.vectorstock.com/i/1000x1000/26/91/online-shop-logo-template-icon-vector-30562691.jpg' style={{height:"380px",width:"50%"}}></img></center>
         
        </div>
        </div> 

    </div>
  );
}

export default Home;