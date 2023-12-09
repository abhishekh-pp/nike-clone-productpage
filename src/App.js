import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product/Product';

function App() {

  const [products, setProducts] = useState([
    {
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d91889a4-7369-47bd-b012-b1042aefbc9a/air-max-pulse-shoes-QShhG8.png",
      title: "Nike Air Max Pulse",
      price: 13995
    },

    {
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5fc3c56d-c31f-4af0-a844-9cbddedb3f15/air-jordan-xxxviii-pf-basketball-shoes-tTRwfF.png",
      title: "Air Jordan XXXVII PF",
      price: 18395
    },
    
    {
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ff2f9d9c-6886-43e9-8d9e-69fad6246bdf/cosmic-unity-3-basketball-shoes-hcwmW0.png",
      title: "Cosmic Unity 3",
      price: 13995
    },
    
    {
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/de63e1ff-c1ab-40e9-aaaf-1ccd5d0cac07/air-jordan-1-low-se-craft-shoes-q1ktlR.png",
      title: "Air Jordan 1 Low SE Craft",
      price: 10295
    },

    {
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60e98509-bbe4-4edf-a1cc-77567773fcef/dunk-low-retro-shoes-LX3n9P.png",
      title: "Nike Dunk Low Retro Premium",
      price: 9695
    },

    {
      image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c7b65b4-26ce-4279-a0fd-9620a9be25fb/custom-dunk-low-unlocked-by-you.png",
      title: "Nike Dunk Low Retro Premium",
      price: 13995
    }

    
  ])
  return (

    <>

   <Header/>
   <main>
      <section>
        <h2>Men's Casual</h2>
        <ul className='products'>
          {
            products.map((product) => {
              return <Product product={product}/>
            })
          }
        </ul>
      </section>
   </main>
   <footer></footer>

   </>
  );
}

export default App;
