import React, { useState } from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import banner3 from  './images/Banner3.jpg';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import Banner1 from './images/Banner1.jpg';
import Banner2 from './images/Banner2.jpg';
import Banner3 from './images/Banner3.jpg';
import Banner4 from './images/Banner4.jpg';
import Banner5 from './images/Banner5.jpg';

function Checkout() {
     
  const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const [imageIndex, setImageIndex] = useState(0);
  const banner = banners[imageIndex];
  var myvar = setTimeout(changeImage, 3000);
  function changeImage() {
    if (imageIndex + 1 < banners.length) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }
    
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>

            
          <div className="checkout__left">
              <img className="checkout__ad" src= {banner}/>
           
              <div>
              <h3>Hello, {user?.email}</h3>   
              <h2 className="checkout__title ">
                  Your Shopping Basket
              </h2> 

              {basket.map(item => (
                 <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}       
                  />
                      )
                
                )}

                </div>  

          </div>

          <div>

          <div className="checkout__right">
              <Subtotal />


              
          </div>    



          </div>
        </div>  

    )
}

export default Checkout
