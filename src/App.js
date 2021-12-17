import React,{useState} from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import Header from './components/back/data/Header';
import data from "./components/back/data/data";
import Routes from './components/back/data/Routes';
 {/*Pole otseselt reacti niimodi kasutanud kui ainult kursuseid lahendanud. Kindlasti õpin läbi selle ülesande...*/}

const App = () => {
  const { ProductItems } = data;
  const [CartItems, SetCartItems] = useState([]);

  const handleAddProduct = (product) =>{
    const ProductExists = CartItems.find((item) => item.id === product.id);
    if(ProductExists){
      SetCartItems(CartItems.map((item) => item.id === product.id ? {...ProductExists, quantity: ProductExists.quantity + 1} : item))
    }
    else{
      SetCartItems([...CartItems, {...product,quantity: 1}])
    }
  }

  const handleRemoveProduct = (product)=>{
    const ProductExists = CartItems.find((item) => item.id === product.id);
    if(ProductExists.quantity === 1){
      SetCartItems(CartItems.filter((item) => item.id !== product.id))
    }
    else{
      SetCartItems(
        CartItems.map((item => item.id === product.id ? {...ProductExists,quantity:ProductExists.quantity -1} : item))
      )
    }
  }
  return (
    <div>
        <Router>
          <Header CartItems={CartItems}/>
          <Routes ProductItems={ProductItems} CartItems={CartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
        </Router>
    </div>
  );
};

export default App;
