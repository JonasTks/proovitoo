import React from 'react';
import {Link } from "react-router-dom";
import "./Header.css";
import {AiFillShopping} from "react-icons/ai";
const header = ({CartItems}) => {
    return (
       <header className="header">
           <div>
               <h1>
                <Link to="/" className="logo">
                    Proovitöö
                </Link>
                </h1>
            </div>
            <div className="header-links">

                <ul>
                    <li>
                        <Link to="/ostukorv" className='cart'>
                        <AiFillShopping size="30px" color="White"/>
                        <span className='number'>
                            {CartItems.length === 0 ? "" : CartItems.length}
                        </span>
                        </Link>
                    </li>
                </ul>
            </div>
       </header>
    )
}

export default header
