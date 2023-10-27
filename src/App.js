import { useEffect , useState } from 'react';
import './App.css';



function App() {

  // for getting data from json file
  const url = "http://localhost:3030/data";
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);


 
// for adding data to the cart array
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product Added to the cart:', product);
    cart.push(product);

    cart.length == 0 ? console.log("Cart is empty") :
    console.log('List of products present in the cart array:', cart);
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      console.log(element)
      
    }
    
  };



  // for removing data from cart array and update it.


  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
    console.log('Product Removed from the cart:', product);

    updatedCart.length == 0 ? console.log("cart is empty") :
    console.log('List of products present in the cart array:', updatedCart);
    for (let i = 0; i < updatedCart.length; i++) {
      const element = updatedCart[i];
      console.log(element)
      
    }
  };
  

  

  


      
  return (
    <>

    {data.map((category ) => {
      return (
        <div classNameName="part" style={{padding:"100px"}} key={category} >
              <h1>{category.name}</h1>
              <hr />
              <div className='row'>
                {category.productList.map((product , index) =>{
                  return (
                        <div className='col-4' key={index}>
                            <div className="card text-start" style={{width: "18rem",border:"1px solid blue"}} >
                              <div className="card-body ">
                                <label><strong>Name :</strong></label><span>{product.name}</span><br />
                                <label><strong>Prize :</strong></label><span>{product.price}.00</span><br />
                                <div className='buttons text-center mt-3'>
                                <button className='btn btn-primary mb-3 mt-2 ps-3 pe-3' onClick={() => addToCart(product) } >Add to cart</button><br />
                                <button className='btn btn-primary ps-3 pe-3' onClick={() => removeFromCart(product)}>remove from cart</button>
                                </div>
                              </div>
                            </div>
                        </div>
                      )
                    })}
                
              </div>  
        </div>
      )
    })}
      
      

    </>
  );
}

export default App;
