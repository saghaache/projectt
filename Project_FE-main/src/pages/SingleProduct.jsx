import React, { useState, useEffect } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Products } from '../data/Products';
import { AiOutlineHeart } from "react-icons/ai";
import { useParams, useNavigate } from 'react-router-dom';
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addCartAction, addwishlistAction } from '../config/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    

    const { id } = useParams();
    const Product = Products.find(p => p.id === parseInt(id));
    const cartItems = useSelector(state => state.carts);
    const wishlistItems = useSelector(state => state.wishlist);
    const [ProductImage, setProductImage] = useState(Product.img);
    const [ProductTitle, setProductTitle] = useState(Product.title);
    const [ProductPrice, setProductPrice] = useState(Product.price);
    const [ProductQuantity, setProductQuantity] = useState(1);
    const dispatch = useDispatch();
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const navigate = useNavigate();


    const handleClick = (Product) => {
        const isProductInCart = cartItems.some(item => item.id === Product.id);
        if (!isProductInCart) {
            dispatch(addCartAction({
                id: Product.id,
                ProductImage: ProductImage,
                ProductTitle: ProductTitle,
                ProductPrice: ProductPrice,
                ProductQuantity: ProductQuantity
            }));
            toast.success("The product has been added to the shopping cart successfully", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error("The product is already in the shopping cart", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const checkout = (Product) => {
        const isProductInCart = cartItems.some(item => item.id === Product.id);
        if (!isProductInCart) {
            dispatch(addCartAction({
                id: Product.id,
                ProductImage: ProductImage,
                ProductTitle: ProductTitle,
                ProductPrice: ProductPrice,
                ProductQuantity: ProductQuantity
            }));
            toast.success("The product has been added to the shopping cart successfully", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error("The product is already in the shopping cart", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        navigate('/checkout');

    }

    const addwishlist = (Product) => {
        const isProductInWishlist = wishlistItems.some(item => item.id === Product.id);
        if (!isProductInWishlist) {
            dispatch(addwishlistAction({
                id: Product.id,
                ProductImage: ProductImage,
                ProductTitle: ProductTitle,
                ProductPrice: ProductPrice,
            }));
            toast.success("The product has been added to the wishlist successfully", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error("The product is already in the wishlist", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }



    useEffect(() => {
        const calculateTimeRemaining = () => {
            if (Product.datefin && new Date(Product.datefin) > new Date()) {
                const currentDate = new Date();
                const endDate = new Date(Product.datefin);

                const totalSeconds = Math.floor((endDate - currentDate) / 1000);

                const days = Math.floor(totalSeconds / (24 * 60 * 60));
                const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
                const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
                const seconds = Math.floor(totalSeconds % 60);

                setTimeRemaining({ days, hours, minutes, seconds });
            } else {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeRemaining();

        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval);
    }, [Product.datefin]);

    return (
        <>
            <Meta title={Product.title} />
            <BreadCrumb title={Product.title} />
            <div className="main-product-wrapper py-5 home-wrapper-2" id={Product.title}>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                       <img src={Product.img} alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h5>{Product.title}</h5>
                                </div>
                                <div className="border-bottom">
                                        <p className="price mt-2">  ${Product.price} </p>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex align-items-center gap-10 my-3">
                                        <h6 className="product-heading">Categories : </h6>
                                        <p className="product-data">{Product.categorie}</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10  my-3">
                                        <h6 className="product-heading">Brand : </h6>
                                        <p className="product-data">{Product.brand}</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-3">
                                        <h6 className="product-heading">Shipping : </h6>
                                        <p className="product-data text-success">Free shipping</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-4">
                                        <p className="product-heading">Quantity :</p>
                                        <div className="gap-10 d-flex align-items-center">
                                            <input type="number" name="" id="" min={1} value={ProductQuantity} onChange={(e) => setProductQuantity(e.target.value)} className="form-control me-4" />
                                            <button className="button" onClick={() => { handleClick(Product); }}>ADD TO CART</button>
                                            <ToastContainer className="notif" />
                                            <button className="buttonbg" onClick={() => { checkout(Product) }}>Buy It Now</button>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="d-flex align-items-center add-link">
                                            <AiOutlineHeart className="fs-5" />
                                            <p className="mb-0" onClick={() => { addwishlist(Product) }}>Add to Wishlist</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="border-bottom d-flex gap-15 py-2 service ">
                                    <p>
                                        <FaShippingFast /> Free Delivery
                                    </p>
                                    <p>
                                        <MdOutlineAttachMoney /> Easy Payments
                                    </p>
                                    <p>
                                        <FaHeadset /> 24/7 Service
                                    </p>
                                </div>
                                <div className="payment py-3">
                                    <h5 className="text-center">Payment methods</h5>
                                    <div className="payment-images">
                                        <div><img src="/images/payment.png" alt="payment" /></div>
                                        <div><img src="/images/payment2.png" alt="payment" /></div>
                                        <div><img src="/images/payment3.png" alt="payment" /></div>
                                        <div><img src="/images/payment4.png" alt="payment" /></div>
                                        <div><img src="/images/payment5.png" alt="payment" /></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3 description">
                                <p className="py-2 ">
                                    {Product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;
