import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
export default function Signup() {
    return (
        <>
            <Meta title={"Signup"} />
            <BreadCrumb title="Signup" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3>Create Account</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                                </div>
                                <div>
                                    <input type="email" name="email" className="form-control" placeholder="Your Email" required/>
                                </div>
                                <div>
                                    <input type="password" name="password" className="form-control" placeholder="Password" required/>
                                </div>
                                <div>
                                    <input type="password" name="confirmpassword" className="form-control" placeholder="Confirm Password" required/>
                                </div>
                                <div>
                                    <input type="tel" name="phone" className="form-control" placeholder="Your Number Phone" required/>
                                </div>
                                <div className="d-flex flex-column justify-content-center gap-15 align-items-center ">
                                    <button className="button w-25">Create</button>
                                    <Link to="/login">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
