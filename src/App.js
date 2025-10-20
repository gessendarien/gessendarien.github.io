import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import { websiteTitle } from "./info/Info";


function App() {
   useEffect(() => {
      document.title = websiteTitle;
   }, []);
   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
