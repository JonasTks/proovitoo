import React from 'react'
import "./Products.css";

const Products = ({ProductItems, handleAddProduct}) => {
    
    return (
     <div className="products">
         {ProductItems.map((ProductItem) => (
                 <div className="each">
                     <div>
                         <img className="product-image" src={ProductItem.image} alt={ProductItem.name} />
                     </div>
                     <div>
                         <h3 className="product">
                             {ProductItem.name}
                         </h3>
                     </div>
                    <div className="Pprice">
                        {ProductItem.price}€
                    </div>

                    <div>
                        <button className="add-product" onClick={()=>handleAddProduct(ProductItem)}>Lisa ostukorvi</button>    
                    </div>

                 </div>
                 
             ))}

     </div>
    );
};

export default Products;
