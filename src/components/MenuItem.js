import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuItem = ({ title, description, imageName, price, quantity, add, remove }) => {
  return (
    <div class="container py-4">
        <div className="row menu-item align-items-start">
                <div className="col-2">
            <img className="menu-image" src={`/images/${imageName}`} alt={title} />
        </div>
        <div className="col-10" style={{ paddingLeft: "10rem" }}>
            <h2 className="menu-item-title text-align left">{title}</h2>
            <p className="menu-description">{description}</p>
            <div className ="row menu-item align-items-end">
                <span className="menu-price">${price}</span>
                {/* adding the add and remove buttons */}
                <div className="col- 11 d-flex align-items-center justify-content-center gap-2" >
                    <button 
                        className="menu-button"
                        onClick={() => remove(title,price)}
                        disabled={quantity === 0}
                    >-</button>
                    <span className="px-2">{quantity}</span>
                    <button 
                        className="menu-button"
                        onClick={() => add(title,price)}
                    >+</button>
                </div>
             </div>
        </div>

        
        </div>
    </div>

  );
};

export default MenuItem;




