import React from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Categories } from "../data/Categories";
import { useSelector, useDispatch } from "react-redux";
import { searchAction } from '../config/Action';


export const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.carts);

  const calculateTotal = () => {
    let totalPrice = 0;
    carts.forEach((product) => {
      totalPrice += product.ProductQuantity * product.ProductPrice;
    });
    return totalPrice;
  };

  const handelSearch = (search) => {
    dispatch(searchAction(
      { search: search }
    )
    )
  }
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="logo"><img src="../images/photo/sport.png" alt="cart" class="img-fluid" /></Link>
              </h2>
            </div>
            <Link to="/store" className="col-5 search">
              <div class="input-group ">
                <input
                  className="form-control py-2"
                  type="text"
                  placeholder="Search Prodcut Here..."
                  onChange={(e) => handelSearch(e.target.value)}
                />

                <span className="input-group-text py-2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </Link>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center float-end">
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white  me-3">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white  me-3">
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">
                      Login in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white ">
                    <img src="/images/téléchargement.png" alt="cart" />
                    <div className="d-flex flex-column gap-1">
                      <span className="badge bg-white text-dark"> {calculateTotal()}</span>
                      <p className="mb-0 fw-normal">Panier</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center pt-2">
                <ul className='logofm'>
                  {
                    Categories.map(
                      (categorie => (
                        <li>
                          <Link to={`/store/${categorie.title}`}>
                            {categorie.title.replace(/_/g, " ")}
                          </Link>
                        </li>
                      ))
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
