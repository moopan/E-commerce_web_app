import React, { useState } from 'react';
import './Home.css';
import Banner1 from './images/Banner1.jpg';
import Banner2 from './images/Banner2.jpg';
import Banner3 from './images/Banner3.jpg';
import Banner4 from './images/Banner4.jpg';
import Banner5 from './images/Banner5.jpg';
import Product from "./Product";

function Home() {

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
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                   src= {banner}
                   
                 
                />

                <div className="home__row">
                    <Product
                      id="12345" 
                      title="The 7 Habits of Highly Effective People
                      by Stephen R. Covey  | 14 June 2020"
                      price={599}
                      image="https://m.media-amazon.com/images/I/81qgEPE6k1L._AC_UY218_.jpg"
                      rating={4} />
                    <Product
                       id  = "91524" 
                      title="New Apple iPhone 11 (128GB) - (Product) RED"
                      price={58100}
                      image="https://m.media-amazon.com/images/I/71hh7cpWadL._AC_UY218_.jpg"
                      rating={4} />
                </div>

                <div className="home__row">
                    <Product
                       id= "19305" 
                      title="Marshall Major III On-Ear Headphones (White)"
                      price={4499}
                      image="https://m.media-amazon.com/images/I/81XHXGy9cOL._AC_UY218_.jpg"
                      rating={3} />
                    <Product
                        id="29408"
                      title="Craftland Handmade Wooden Serving and Cooking Spoon Kitchen Non Stick Utensil Set (6)"
                      price={425}
                      image="https://m.media-amazon.com/images/I/9127-+3-ktL._AC_UL320_.jpg"
                      rating={2} />
                    <Product
                        id="54026" 
                      title="Jockey Unisex's Cotton Face Mask (Pack of 2)"
                      price={269}
                      image="https://m.media-amazon.com/images/I/616K2wXUBZL._AC_UL320_.jpg"
                      rating={3} />             
                </div>

                <div className="home__row">
                     <Product
                         id="04347"
                       title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)" 
                       price={178999}
                       image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
                       rating={4} />
                    
                </div>

                <div className="home__row">
                     <Product
                         id="43849"
                       title="JBL C50HI by Harman in-Ear Headphones with Mic (Blue)"
                       price={549}
                       image="https://m.media-amazon.com/images/I/31b26iE0rPL.jpg"
                       rating={3} />
                     <Product
                         id="54492"
                       title="Philips HR3705/10 300-Watt Hand Mixer"
                       price={1949}
                       image="https://images-na.ssl-images-amazon.com/images/I/41tDUmnDITL._SX450_.jpg"
                       rating={5} />
                     <Product
                        id="33845"
                       title="Usha Diplomat 1200 mm 74-Watt Ceiling Fan (Rich Brown)"
                       price={1599}
                       image="https://m.media-amazon.com/images/I/317nvqFLQWL._AC_UY218_.jpg"
                       rating={1} />
                     <Product
                         id="72438"
                       title="New Apple Watch Series 6 (GPS + Cellular, 40mm) - Blue Aluminium Case with Deep Navy Sport Band"
                       price={47900}
                       image="https://m.media-amazon.com/images/I/718qilkBKUL._AC_UL320_.jpg"
                       rating={5} />
                </div>
            </div>     
            
        </div>
    )
}

export default Home
