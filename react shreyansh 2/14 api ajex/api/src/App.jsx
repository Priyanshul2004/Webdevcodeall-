import axios from "axios";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
  
    axios.get(api)
      .then(products => {
        console.log(products.data);
        setProducts(products.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const addProduct = () => {
    const api = "https://fakestoreapi.com/products";
  
    axios.post(api, {
      title: 'Test Product',
      price: 13.5,
      description: 'Lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronics'
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  };

  console.log(products);

  return (
    <div className="p-10">
      <button onClick={getProducts} className="bg-blue-400 rounded-md text-white">Call Product API</button>
      <br/><br/>
      <button onClick={addProduct} className="bg-blue-400 rounded-md text-white">Save Product API</button>
      <hr className="my-10" />
      <ul>
          {products.length > 0 ? products.map(product => (
          <li key={product.id} className="rounded w-1/2 bg-red-200">{product.title}</li>
        )) : <h1>Loading</h1>}
      </ul>
    </div>
  );
}

export default App;

