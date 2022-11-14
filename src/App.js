import React from 'react';
import {selectAllDishes, getTotalCount} from "./features/menu/menu-slice";
import './App.css';
import {NavBar} from './components/navbar';
import {Banner} from './components/banner';
import {Menu} from './features/menu/menu';
import {Footer} from "./components/footer";  
import {Contact} from "./components/contact"

function App() {
  // const dishes=useSelector(selectAllDishes);
  // const totalCount=getTotalCount(dishes);
  return (
    <div>
      <NavBar />
      <Banner />
      <Menu />
          {/* {totalCount > 0 && <Order />} */}
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
