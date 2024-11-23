import "../assets/css/login.css";
import "../assets/css/common.css";
import "../assets/css/register.css";
import user_img from "../assets/images/user.svg";
import email_img from "../assets/images/email.svg";
import eye_close_img from "../assets/images/eye_close.svg";
import eye_open_img from "../assets/images/eye_open.svg";
import password_img from "../assets/images/password.svg";
import phone_img from "../assets/images/phone.svg";
import { Link } from "react-router-dom";

const Register = ()=>{
    return(
        <>
            <div className="my_main_wrap">
        <div className="my_main_inside">
            <div className="my_login_wrap">
                <div className="my_login_inside grid justify_sp_between">
                    <div className="my_login_left_wrap">
                        <div className="my_login_left__inside flex justify_sp_between flex_column">
                            <div className="my_login_left_top_text flex align_center">
                                <div className="my_login_left_top_text_unit_1">
                                    <p className="">A wise Quote</p>
                                </div>
                                <div className="my_login_left_top_text_unit_2">

                                </div>

                            </div>
                            <div className="my_login_left_bottom_text">
                                <p className="my_login_left_bottom_text_unit">Get Everything You Want</p>
                                <div className="my_login_left_footer">
                                    <p>You can get everything you want You can get everything you want You can get everything you want </p>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="my_login_right_wrap">
                        <div className="my_login_right__inside flex justify_sp_between flex_column align_center">
                            <div className="my_login_right_top_text">
                                <p>My Hospital</p>

                            </div>
                            <div className="my_login_right_mid_wrap">
                                <div className="my_login_right_mid_inside">
                                    <div className="my_login_right_welcome text_center">
                                        <p>Create New Account</p>
                                    </div>
                                    <div className="my_login_right_login_text text_center">
                                        <p>Already have an account ? <span><Link to="/">Sign In</Link></span></p>
                                    </div>
                                    <div>
                                        <label>Name</label>
                                    </div>
                                    <div className="my_login_right_email_text">
                                        <input type="email" placeholder="Enter your name"/>
                                        <span className="my_login_right_email_icon">
                                            <img src={user_img}/>
                                        </span>
                                    </div>
                                    <div>
                                        <label>Email</label>
                                    </div>
                                    <div className="my_login_right_email_text">
                                        <input type="email" placeholder="Enter your email"/>
                                        <span className="my_login_right_email_icon">
                                            <img src={email_img}/>
                                        </span>
                                    </div>
                                    <div className="my_phone_number">
                                        <label>Phone No. <span>(Recommended)</span></label>
                                    </div>
                                    <div className="my_login_right_email_text">
                                        <input type="email" placeholder="Enter your phone number"/>
                                        <span className="my_login_right_email_icon">
                                            <img src={phone_img}/>
                                        </span>
                                    </div>
                                    <div>
                                        <label>Password</label>
                                    </div>
                                    <div className="my_login_right_password_text">
                                        <input type="password" placeholder="Enter your password"/>
                                        <span className="my_login_right_password_icon">
                                            <img src={password_img}/>
                                        </span>
                                        <span className="my_login_right_show_hide_icon">
                                            <img src={eye_open_img}/>
                                            <img src={eye_close_img} style={{"display": "none"}}/>
                                        </span>
                                    </div>
                                    
                                    <div className="sign_in_button">
                                        <a href="#">Sign Up</a>
                                    </div>
                                    <div className="login_separator">
                                        <hr/>
                                        <span>
                                            <p>OR</p>
                                        </span>
                                    </div>
                                    <div className="google_sign_in_button">
                                        <a href="#">Sign Up with Google</a>
                                    </div>
                                    
                                    

                                </div>

                            </div>

                            

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
        </>
    )
}

export default Register;