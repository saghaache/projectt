import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import ScrollToTopButton from './ScrollToTopButton ';
import { Categories } from '../data/Categories';
export const Footer = () => {
  return (
    <>
      <ScrollToTopButton />
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" width={22} />
                <h3 className="mb-0 text-white fs-5">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  className="form-control py-1"
                  type="text"
                  placeholder="Your Email Adress..."
                />
                <span className="input-group-text py-2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h6 className="text-white mb-4">Contact Us</h6>
              <div className="py-2">
                <address className="text-white fs-7">
                Pl.Othmane Ibn Affane,Raba -<br /> Rabat - Maroc
                </address>
                <a href="tel:+212652583234" className="mt-4 d-block mb-3 text-white">
                  Tel: +212611493478
                </a>
                <a href="mailto:timtech@gmail.com" className="mt-4 d-block mb-3 text-white">
                  Email: stylesport@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-15">
                  <a href="" className="text-white fs-4">
                    <FaFacebook />
                  </a>
                  <a href="" className="text-white fs-4">
                    <IoLogoWhatsapp />
                  </a>
                  <a href="" className="text-white fs-4">
                    <FaInstagram />
                  </a>
                  <a href="" className="text-white fs-4">
                    <BsLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h6 className="text-white mb-4">Account</h6>
              <div className="footer-link d-flex flex-column">
                <Link to="/login" className="text-white py-2 mb-1">Login in My Account</Link>
                <Link to="/wishlist" className="text-white py-2 mb-1">Favorite Wishlist</Link>
                <Link to="/contact" className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-3">
              <h6 className="text-white mb-4">Quick Links</h6>
              <div className="footer-link d-flex flex-column">
              {
                        Categories.map(
                          (categorie => (
                              <Link to={`/store/${categorie.title}`} className='text-white py-2 mb-1'>
                                {categorie.title.replace(/_/g, " ")}
                              </Link>
                          ))
                        )
                      }
              </div>
            </div>

          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <p className="text-start mb-0 text-white">&copy; {new Date().getFullYear()} Powered by Developer Corner{" sara chetouane"}</p>
            </div>
            <div className="col-6">
              <p className="text-end mb-0 text-white payment">
                <img src="/images/payment.png" alt="" width={28} height={17} className="m-1" />
                <img src="/images/payment2.png" alt="" width={28} height={17} className="m-1" />
                <img src="/images/payment3.png" alt="" width={28} height={17} className="bg-white p-1 m-1" />
                <img src="/images/payment4.png" alt="" width={28} height={17} className="bg-white m-1" />
                <img src="/images/payment5.png" alt="" width={28} height={17} className="bg-white p-1 m-1" />
              </p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
