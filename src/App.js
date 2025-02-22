import './App.css';
import MenuItem from './components/MenuItem';
import { useState } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

export default function App(){

    const[cart, setCart] = useState({});
    const[subtotal, setSubtotal] = useState(0);

    const add = (title, price) => {
      setCart((prevCart) => ({
        ...prevCart,
        [title]: (prevCart[title] || 0) + 1
      }));
      setSubtotal((prevSubtotal) => prevSubtotal + price);
    };

    const remove = (title, price) => {
      setCart((prevCart) => {
        if (!prevCart[title]) return prevCart;
        const updatedCart = { ...prevCart };
        if (updatedCart[title] === 1) {
          delete updatedCart[title];
        } else {
          updatedCart[title] -= 1;
        }
        return updatedCart;
      });
      setSubtotal((prevSubtotal) => Math.max(0, prevSubtotal - price));
    };

    const placeOrder = () =>{
      if(Object.keys(cart).length === 0){
        alert("No items in the cart!")
        return;
      }

    let orderSummary = "Your order has been placed!\n\n";
    for (let item in cart) {
      orderSummary += `${item}: ${cart[item]}\n`;
    }
    orderSummary += `\nTotal: $${subtotal.toFixed(2)}`;

    alert(orderSummary); // Show alert with order details

    // Reset cart after order is placed
    setCart({});
    setSubtotal(0);

    };

    const clearAll = () =>{
      setCart({});
      setSubtotal(0);
    };


  return (
    <div>
      <div class="container py-4">
        <h1 className='menu-title'>&#x1F338;Blossom Cafe</h1>
        <h2 className="menu-subtitle">Delicious, From-Scratch Recipes Close at Hand</h2>
        <h3 className="menu-tagline">The Fresh Choice of UT!</h3>
      </div>
      <div className="menu-item">
        {/* Loop through menuItems and render each MenuItem dynamically */}
        {menuItems.map((item) => (
          <MenuItem 
            key={item.id}
            title={item.title}
            description={item.description}
            imageName={item.imageName}
            price={item.price}
            quantity={cart[item.title] || 0}
            add={add}
            remove={remove}
          />
        ))}
      </div>

      <div className ="container py-4">
        <div className = "row justify-content-between align-items-center">
        <div className="subtotal col-auto">
          <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
        </div>
         <div className = "col 10" style={{paddingLeft: "2rem" }}>
          <button className="order-button" onClick={placeOrder}>
              Place Order
            </button>
        </div>
          <div className = "col 11">
            <button className="clear-button" onClick={clearAll}>
                  Clear All
            </button>
          </div>
      </div>
    </div>
    </div>
    
  );
  }

