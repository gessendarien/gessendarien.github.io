import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { HashRouter } from "react-router-dom";
import { websiteTitle } from "./info/Info";


function App() {
   useEffect(() => {
      document.title = websiteTitle;
   }, []);
   return (
      <div>
         <HashRouter>
            <BaseLayout/>
         </HashRouter>
      </div>
   );
}


export default App;
