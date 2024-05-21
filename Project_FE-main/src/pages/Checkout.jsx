import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from "react-redux";
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { useEffect } from 'react';

export default function Checkout() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const carts = useSelector((data) => data.carts);
    const calculateTotal = () => {
        let totalPrice = 0;
        carts.forEach((product) => {
            totalPrice += product.ProductQuantity * product.ProductPrice;
        });
        return totalPrice;
    };

    return (
        <>
            <Meta title={"Checkout"} />
            <BreadCrumb title={"Checkout"} />
            <div className="chekout-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h4 className="title">Contact Information</h4>
                                <p className="user-details">
                                    Teljaoui Mohamed ( teljaoui2004@gmail.com )
                                </p>
                                <form action="" className="d-flex flex-column gap-15 justify-content-between">
                                    <div className="d-flex">
                                        <input type="text" placeholder="First Name" className="form-control m-1" required />
                                        <input type="text" placeholder="Last Name" className="form-control m-1" required />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="City" className="form-control" required />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" placeholder="Adress" className="form-control" required />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" placeholder="Apartment, Suiten, etc" className="form-control" required />
                                    </div>
                                    <div className="w-100">
                                        <input type="number" placeholder="Phone Number" className="form-control" required />
                                    </div>
                                    <div className="d-flex justify-content-between py-3 align-items-center">
                                        <Link to="/cart" className="text-dark">
                                            <BiArrowBack />
                                            Return to Cart
                                        </Link>
                                        <button type="submit" className="button">
                                            Continue to Shipping
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col-5">
                            <div className="checkout-right-data ">
                                <div className="product-info  pb-3">
                                    {
                                        carts.map(
                                            (product => (
                                                <div className="d-flex  justify-content-between align-items-center border-bottom py-3">

                                                    <div className="d-flex align-items-center">
                                                        <div className="position-relative">
                                                            <span className="rounded-circle p-2">{product.ProductQuantity}</span>
                                                            <img src={`/${product.ProductImage} `} width={60} alt="" srcset="" />
                                                        </div>
                                                        <p className="title">
                                                            {product.ProductTitle.length > 20 ? product.ProductTitle.substring(0, 20) + '...' : product.ProductTitle}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="price">$ {product.ProductQuantity * product.ProductPrice}</p>
                                                    </div>
                                                </div>


                                            ))
                                        )
                                    }
                                </div>
                                <div className="border-bottom py-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>Subtotal</p>
                                        <p className="price">$ {calculateTotal()}</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0">Shipping</p>
                                        <p className="price mb-0 text-success">$ 0</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-4 align-items-center">
                                    <h6>Total</h6>
                                    <h6>$ {calculateTotal()}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
