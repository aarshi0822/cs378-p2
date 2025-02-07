import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

const MenuItem = ({ title, description, imageName, price }) => {
  return (
    <div class="container py-4">
        <div className="row menu-item align-items-start">
        
        {/* Image on the Left */}
        <div className="col-2">
            <img className="menu-image" src={`/images/${imageName}`} alt={title} />
        </div>
        

        {/* Title & Description on the Right */}
        <div className="col-10" style={{ paddingLeft: "10rem" }}>
            <h2 className="menu-item-title text-align left">{title}</h2>
            <p className="menu-description">{description}</p>
            <div className ="row menu-item align-items-end">
                <p className="menu-price">${price}</p>
            </div>

        </div>

        {/* Price Below */}
        <div className="col-10 d-flex justify-content-between align-items-center" style={{ paddingLeft: "500px" }}>
            <button className= "menu-button">Add</button>
        </div>
        
        </div>
    </div>

  );
};

export default MenuItem;
