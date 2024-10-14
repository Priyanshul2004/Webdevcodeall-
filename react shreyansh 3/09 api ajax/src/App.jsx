import axios from 'axios';
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState([])

  const getProduct = () => {
    const api = 'https://fakestoreapi.com/products/1';

    axios.get(api)
      .then((response) => {
        console.log(response);
        setProducts([response.data]); // Wrap response.data in an array
      })
      .catch(error => console.log(error));
  }

  const addProduct = () => {
    const api = 'https://fakestoreapi.com/products';

    axios.post(api, {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  console.log(products);

  return (
    <div className='p-10'>
      <button onClick={getProduct} className='bg-blue-400 px-4 py-2 text-white'>API DATA</button>
      <br />
      <button onClick={addProduct} className='m-10 bg-blue-400 px-4 py-2 text-white'>Add DATA</button>
      <hr />
      {products.length > 0 ? 
        <ul className='mt-10'>
          {products.map((product, index) => (
            <li key={index}>{product.title}</li>
          ))}
        </ul> 
        : 
        <h1>Loading....</h1>
      }
    </div>
  );
}

export default App;

