import React from "react";
import './LoginPage.css'
import { Link } from "react-router-dom";
export default function LoginPage() {

    const handleonChange = (props) => { 
        props.preventDefault();
        window.location.href = '/SignupPage'
    }
    return (
        <>
            <div className="Login">
                <div className="facebook">
                    <div className="facebooktext">
                        facebook
                    </div>
                    <div className="title">
                        Facebook helps you to connect and<br />
                        share with people in your life.
                    </div>
                </div>
                <div className="LoginContainer">
                    <div className="LoginDetails">
                        <input type="email" placeHolder="Email address or phone number" required />
                        <br />
                        <input type="Password" placeholder="Password" id="password" required />
                        <br />
                        <br />
                        <button className="btn">
                            <Link to="/Success" >Log In</Link>
                        </button>
                    </div>

                    <div className="forget">
                        <a href="forget">Forgotten Password</a>
                        <br />
                        <button className="btns" onClick={(e) => handleonChange(e)}>
                            Create New Account
                        </button>
                    </div>
                    <br />
                    <br />
                    <div className="page">
                        <a href="createpage"><b>Create a Page</b></a> for a celebrity, brand or business.
                    </div>
                    <div className="footer">
                        <ol>
                            <li>English (UK)</li>
                            <li><a href="#മലയാളം">മലയാളം</a></li>
                            <li><a href="#தமிழ்">தமிழ்</a></li>
                            <li><a href="#తెలుగు">తెలుగు</a></li>
                            <li><a href="#বাংলা">বাংলা</a></li>
                            <li><a href="#اردو">اردو</a></li>
                            <li><a href="#हिन्दी">हिन्दी</a></li>
                            <li><a href="#ಕನ್ನಡ">ಕನ್ನಡ</a></li>
                            <li><a href="#Español">Español</a></li>
                            <li><a href="#Português (Brasil)">Português (Brasil)</a></li>
                            <li><a href="#Français (France)">Français (France)</a></li>
                            <li><button>+</button></li>
                        </ol>
                        <ol>
                            <li><a href="#Sign Up">Sign Up</a></li>
                            <li><a href="#Log In ">Log In </a></li>
                            <li><a href="#Messenger">Messenger</a></li>
                            <li><a href="#Facebook Lite">Facebook Lite</a></li>
                            <li><a href="#Watch">Watch</a></li>
                            <li><a href="#People">People</a></li>
                            <li><a href="#Pages">Pages</a></li>
                            <li><a href="#Page categories">Page categories</a></li>
                            <li><a href="#Places">Places</a></li>
                            <li><a href="#Games">Games</a></li>
                            <li><a href="#Locations">Locations</a></li>
                            <li><a href="#Marketplace">Marketplace</a></li>
                            <li><a href="#Facebook">Facebook</a></li>
                            <li><a href="#PayGroups">PayGroups</a></li>
                            <li><a href="#Jobs">Jobs</a></li>
                            <li><a href="#Oculus">Oculus</a></li>
                            <li><a href="#Portal">Portal</a></li>
                            <li><a href="#Instagram">Instagram</a></li>
                            <li><a href="#Local">Local</a></li>
                        </ol>
                        <small>Facebook © 2022 </small>
                    </div>
                </div>

            </div>

        </>
    )
}