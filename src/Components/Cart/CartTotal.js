import React from 'react';
import { Link } from 'react-router-dom';
import PaypalButton from './PaypalButton';

function CartTotal({value, history}) {
    const {clearCart, cartSubTotal,cartTax,cartTotal}=value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                        type="button" onClick={()=> clearCart()}>
                        clear cart</button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            subtotal : </span>
                            <strong>&#8377; {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            coupon : </span>
                            <strong>&#8377; </strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            tax : </span>
                            <strong>&#8377; {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            total : </span>
                            <strong>&#8377; {cartTotal}</strong>
                    </h5>
                    <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CartTotal;