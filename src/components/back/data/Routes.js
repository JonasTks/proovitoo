import React from 'react';
import {Route ,Switch } from 'react-router-dom';
import Products from './Products';
import Cart from './cart';
const routes = ({ProductItems, CartItems, handleAddProduct, handleRemoveProduct}) => {
    return (
        
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products ProductItems={ProductItems} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/ostukorv">
                    <Cart CartItems={CartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
                </Route>
            </Switch>
        </div>
        
    );
    
};

export default routes;
