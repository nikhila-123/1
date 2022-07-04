import { useEffect, useState } from 'react';

import './App.css';
import './index.css';
import Header from './Components/Header';
import Basket from './Components/Basket';
import Main from './Components/Main';



function App() {

  const [products, setProducts] = useState([]);
const[cartItems,setCartItems] = useState([]);
const onAdd = (product) => 
{
  const exist = cartItems.find((x) => x.id === product.itemname);
  if (exist) {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.iitemname ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};
const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.itemname);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.itemname));
  } else {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.itemname ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};

  useEffect(() => {
    const fetchProducts = async () => {
      
      try {

        
        const data = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json');
        const products = await data.json();

        setProducts(products);
      } catch (err) {}
    };
    fetchProducts();
  },[]);

  
  console.log(products);
  return (
    <div className="App">
      
      <Header  />
      
      
      
      <div>
       <Main products={products} onAdd={onAdd}></Main>
  
      </div>

  <div>
    {
      <Basket onAdd={onAdd}  cartItems={cartItems} onRemove={onRemove}></Basket>
}
  
</div>





</div>
    
  );
}
export default App;