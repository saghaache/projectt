import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios';



export const Home = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categorielist').then
      ((res) => { setCategories(res.data) })
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Meta title={"Home"} />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/photo/vente34.jpeg" alt="" className="img-fluid rounded-3" />
                <div className="main-banner-content position-absolute">
                  <h4> Découvrez les meilleurs ventes</h4>
                  
                 
                  <Link to="/store" className="button">BUY NOW</Link>
                </div>

              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center ">
                <Link to="/store" className="small-banner position-relative">
                  <img src="images/photo/Real_Madrid_2023-24_third_kit.webp" alt="" className="img-fluid rounded-3" />
                  <div className="small-banner-content position-absolute">
                    <h4 className='text-white'> THIRD KIT REAL <br />
                      MADRID 23/24</h4>
                    <h5></h5>
                    <p></p>
                  </div>

                </Link>
                <Link to="/store" className="small-banner position-relative">
                  <img src="images/photo/beb.webp" alt="" className="img-fluid rounded-3" />
                  <div className="small-banner-content position-absolute">
                    <h4 className='text-white'>23/24 t-Shirt </h4>
                    <h5></h5>
                    <p className='text-white'>From $180.00</p>
                  </div>
                </Link>
                <Link to="/store" className="small-banner position-relative">
                  <img src="images/sara234.jpg" alt="" className="img-fluid rounded-3" />
                  <div className="small-banner-content position-absolute">
                    <h4></h4>
                    <h5 className='cayti'>25% off</h5>
                    <p className='text-white'> </p>
                  </div>
                </Link>
                <Link to="/store" className="small-banner position-relative">
                  <img src="images/photo/city12.jpg" alt="" className="img-fluid rounded-3" />
                  <div className="small-banner-content position-absolute">
                    <h4>23/24 Third Shirt</h4>
                    <h4>From $150.00</h4>
                    <p></p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0 fw-light">From all orders</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="" />
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className="mb-0 fw-light">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0 fw-light">Shop whith an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="" />
                  <div>
                    <h6>Afforadable Prices</h6>
                    <p className="mb-0 fw-light">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0 fw-light">100% Protected Payments</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                {
                  Categories.map(
                    (categorie => (
                      <Link to={`/store/${categorie.title}`} className="d-flex align-items-center" key={categorie.id}>
                        <div>
                          <h6>{categorie.title.replace(/_/g, " ")}</h6>
                          <p>{categorie.quantités} Items</p>
                        </div>
                        <img src={`http://127.0.0.1:8000/${categorie.img}`} alt="" srcset="" width={110} />
                      </Link>
                    )
                    )
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer className="notif" />

    </>
  );
}
