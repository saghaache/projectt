import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { AiFillHome } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li><Link to="https://www.google.com/maps/place/Nike+Flagship+Store+Rabat/@33.9953416,-6.8528711,16z/data=!4m10!1m2!2m1!1snike+agdal!3m6!1s0xda76dc7b227ddeb:0x4f0770729aafcca6!8m2!3d33.9921847!4d-6.8464722!15sCgpuaWtlIGFnZGFsIgOIAQFaDCIKbmlrZSBhZ2RhbJIBBXN0b3Jl4AEA!16s%2Fg%2F11rkbsnbl6?hl=fr&entry=ttu" target="_blank0"><AiFillHome /><span>Pl.Othmane Ibn Affane,Rabat</span> </Link></li>
                      <li><Link to="tel:+212611493478"><BiSolidPhoneCall /> <span>+212611493478</span></Link></li>
                      <li><Link to="mailto:stylesport@gmail.com"><MdEmail /><span>stylesport@gmail.com</span></Link></li>
                      <li><Link to=""><BsFacebook /> <span>style sport</span></Link></li>
                      <li><Link to=""><BiLogoInstagramAlt /> <span>style_sport</span></Link></li>
                      <li><Link to=""><IoLogoWhatsapp /> <span>+212611493478</span></Link></li>
                      <li><Link to=""><BsTelegram /> <span>style sport</span></Link></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="conatct-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name" required />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number" required />
                    </div>
                    <div>
                      <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments" required></textarea>
                    </div>
                    <div>
                      <button type="submit" className="button">Submit</button>
                    </div>
                  </form>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
