import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';


class Product extends Component {
    render() {
        const {id, title, img, price, inCart}=this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() =>console.log('you clicked on container')}>
                    <Link to="/details">
                        <img src={img} alt="product" className="card-img-top" />
                    </Link>
                    <button className="cart-btn" disabled={inCart?true:false} 
                        onClick={() => {console.log('added to cart');}} >
                        {inCart ? (<p className="text-capitalize mb-0" disabled>in Cart</p>):
                        (<i className="fas fa-cart-plus"></i>)}
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">&#8377;</span>
                            {price}
                        </h5>
                    </div> 
                </div>
            </ProductWrapper>
        )
    }
}
export default Product;

const ProductWrapper=styled.div`
.card {
border-color: transparent;
transition: all 1s linear;
}
.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
        background: rgba(247,247,247);
    }
}
.img-container {
    position: relative;
    overflow: hidden;
}
.img-container:hover .card-img-top {
    transform: scale(1.2);
}
`