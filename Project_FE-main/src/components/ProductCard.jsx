import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsCartPlusFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addCartAction, addwishlistAction } from '../config/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


export const ProductCard = ({ clickedButton, categorie, priceTo, priceFrom }) => {
    const [Products,setProducts] = useState([]);
    useEffect(() =>{
        const fetchProducts = async () =>{
            try{
                const response =await axios.get('http://127.0.0.1:8000/api/productlist');
                setProducts(response.data);
            }catch(error){
                console.error('Erreur lors de la recuperation des produits :',error)
            }
        };
        fetchProducts();
    },[])
    const location = useLocation()
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.carts);
    const [ProductQuantity, setProductQuantity] = useState(1);
    const wishlistItems = useSelector(state => state.wishlist);

    const handleClick = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);
        if (!isProductInCart) {
            dispatch(addCartAction({
                id: product.id,
                ProductImage: product.img,
                ProductTitle: product.title,
                ProductPrice: product.price,
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
    const handleClickwishlist = (product) => {
        const isProductInWishlist = wishlistItems.some(item => item.id === product.id);
        if (!isProductInWishlist) {
            dispatch(addwishlistAction({
                id: product.id,
                ProductImage: product.img,
                ProductTitle: product.title,
                ProductPrice: product.price,
                ProductQuantity: ProductQuantity
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

    const [Product, setProduct] = useState(Products);

    const filteredProducts = categorie ? Product.filter(product => product.categorie.title === categorie) : Products;

    const priceFilteredProducts = priceFrom && priceTo ? filteredProducts.filter(product => product.price >= priceFrom && product.price <= priceTo) : filteredProducts;

    const searchItems = useSelector(state => state.search);

    const searchValue = typeof searchItems.search === 'string' ? searchItems.search.toLowerCase() : '';

    const searchProducts = filteredProducts.filter(product => {
        return product.title.toLowerCase().startsWith(searchValue);
    });

    let displayedProducts = priceFilteredProducts;

    if (searchValue !== '') {
        displayedProducts = searchProducts;
    }

    const [show, setShow] = useState(8);
    const handelShow = () => {
        setShow(show + show)
    }

    const slicedisplayedProducts = displayedProducts.slice(0, show);
    const allProductsDisplayed = show >= displayedProducts.length || show < slicedisplayedProducts.length;

    return (
        <>
            {
                slicedisplayedProducts.map((product => {
                    const isOfferExpired = new Date(product.datefin) > new Date();
                    const isOfferValid = product.offer && isOfferExpired;


                    return (

                        <div className="gr-3" key={product.id}>
                            <Link to={`/product/${product.id}`} className={`${clickedButton === 12 ? "product-card position-relative m-2 py-4 remove" : "product-card position-relative m-2 py-4"}`}>
                                <div className="product-image text-center mb-1">
                                    <img src={`http://127.0.0.1:8000/${product.img} `} alt="" className="img-fluid" width={160} />
                                </div>
                                <div className="product-details">
                                    <h6 className="brand">{product.brand} </h6>
                                    <h5 className="product-title">
                                        {product.title.length > 20 ? product.title.substring(0, 20) + '...' : product.title}
                                    </h5>
                                    {(clickedButton === 12 || clickedButton === 6) && (
                                        <p className="description fw-light fs-6">{product.description.substring(0, 150) + "..."}</p>
                                    )}
                                    <p className="price">
                                        {isOfferValid ? (
                                            <span>
                                                <span className="text-danger">${product.offerPrice}</span> &nbsp;
                                                <strike>$ {product.price}</strike>
                                            </span>
                                        ) : (
                                            `$ ${product.price}`
                                        )}
                                    </p>
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column gap-15">
                                        <button onClick={(e) => { e.preventDefault(); handleClickwishlist(product) }}>
                                            <AiFillHeart />
                                        </button>
                                        <Link to={`/product/${product.id}`} className="button">
                                            <IoEyeSharp />
                                        </Link>
                                        <button onClick={(e) => { e.preventDefault(); handleClick(product); }}>
                                            <BsCartPlusFill />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    );
                }))}

            <ToastContainer className="notif" />
            {!allProductsDisplayed && (
                <div className="col-12 text-center">
                    <button onClick={handelShow} className="button mt-5">show more</button>
                </div>
            )}
        </>
    )
}

export default ProductCard;
