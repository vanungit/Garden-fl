import React, { Component } from "react";
import emptyCart from './emptyCart.png';
import { Link } from 'react-router-dom';
import './emptyCart.css';

class EmptyCart extends Component {

    render() {
        return (
            <div className="emptyCart">
                <div className="emptyCart_img">
                    <img src={emptyCart} alt="sdsf" />
                </div>
                <h1 className="emptyCart_title">Ձեր զամբյուղում այս պահին ապրանքներ չկան</h1>
                <Link to="/" className="emptyCart_btn">
                    Շարունակել գնումներ կատարել</Link>
            </div>
        )
    }
}
export default EmptyCart;
