import React from 'react';
import {BrowserRouter ,Route,Link} from 'react-router-dom';


function Home() {
  return (
    <div>
    <Link to ="/PewDiePie">
   <h1>  PewDiePie</h1>
   </Link>
   <Link to ="/course1">
  <h1> BBkeVines</h1>
  </Link>
    </div>
  );
}

export default Home;
