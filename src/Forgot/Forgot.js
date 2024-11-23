import "../assets/css/login.css";
import "../assets/css/common.css";
import { Link } from "react-router-dom";
import email_img from "../assets/images/email.svg";

const Forgot = ()=>{
    return (
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
                                        <p>Welcome Back</p>
                                    </div>
                                    <div className="my_login_right_login_text text_center">
                                        <p>Enter your email or phone no. to recover your password</p>
                                    </div>
                                    <div>
                                        <label>Email / Phone No.</label>
                                    </div>
                                    <div className="my_login_right_email_text">
                                        <input type="email" placeholder="Enter your email / phone no."/>
                                        <span className="my_login_right_email_icon">
                                            <img src={email_img}/>
                                        </span>
                                    </div>
                                    
                                    
                                    <div className="sign_in_button">
                                        <a href="#">Recover Password</a>
                                    </div>
                                    
                                    
                                    
                                    

                                </div>

                            </div>
                            <div className="my_login_right_bottom_text">
                                <p className="my_login_right_bottom_text_unit">Want to Login? <span><Link to="/">Sign In</Link></span></p>
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

export default Forgot;