import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <div className="login-wrapper py-5 home-wrapper-2">
               <div className="container-xxl">
                 <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3>Login</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="email" name="email" className="form-control" placeholder="Your Email" required/>
                                </div>
                                <div>
                                    <input type="password" name="password" className="form-control" placeholder="Password" required/>
                                </div>
                                <div>
                                    <Link to="/forgotpassword">Forgot Password?</Link>
                                </div>
                                <div className="d-flex flex-column justify-content-center gap-15 align-items-center ">
                                    <button className="button w-25">Login</button>
                                    <Link to="/signup" className="signup">If you don't have an account?  Register now</Link>
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
