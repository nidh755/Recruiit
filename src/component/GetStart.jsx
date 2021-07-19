import React from "react";
import "../css/GetStart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const GetStart = () => {
    return (<>
        {/* <div className="justify-content-center text-center ">
            <p className="h2 cormorant  fw-bold">Get Your Team<br />Working with <br /> Us!<br /></p>
            <button className="colorfull p-4 cormorant text-light fw-bold" style={{fontSize:"1.5rem",width:"300px"}}>Get Started</button>
        </div> */}
        <div className="container mt-5 ps-3">
            <div className="row" >
                <div className="col-lg-4" >
                    <p className="fw-bold">All-in-one platform</p>
                    <p>Payroll</p>
                    <p>Employee benefits</p>
                    <p>Health insurance</p>
                    <p>Financial benefits</p>
                    <p>Hiring and onboarding</p>
                    <p>Expert HR</p>
                    <p>Time tracking tools</p>
                    <p>Workers' comp</p>
                    <p>Integrations</p>
                    <p>Recruiit Wallet</p>
                    <p>Recruiit Partner Offers</p>
                </div>
                <div className="col-lg-4" >
                    <p className="fw-bold">Tools</p>
                    <p>Small Business Financial Relief</p>
                    <p>Employer tax calculator</p>
                    <p>Burn rate calculator</p>
                    <p>Salary comparison tool</p>
                    <p>New hire checklist</p>
                    <p className="pb-5">Small business guides</p>
                    <p className="fw-bold">Social<span className="ps-5 pe-2" style={{color:"blue"}}><FontAwesomeIcon icon={faFacebook}/></span><span style={{color:"danger"}}><FontAwesomeIcon icon={faInstagram} /></span></p>
                    <p className="fw-bold">Contact <span className="text-danger">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0012576469</span></p>
                </div>
                <div className="col-lg-4" >
                    <p className="fw-bold">About Recruiit</p>
                    <p>About</p>
                    <p>Careers -<span className="text-danger"> We're hiring!</span></p>
                    <p>Press</p>
                    <p>Contact</p>
                   <p> Investors</p>
                <p>Affiliate program</p>
                </div>

            </div>
        </div>

    </>);

}
export default GetStart;