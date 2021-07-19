import React from "react";
import png from "../static/81.png";
import "../css/Client.css";
const Client = ()=>{
    return(<>
    <div className="slant5" style={{height:"100px",position:"relative",top:"40px"}}>    </div>
    <div className="container-fluid pb-5" style={{backgroundColor:"#D6F2FB"}}>
    <h1 className="ms-5 mt-4 fw-bold" style={{color:"#003274"}}>Client Testimonals </h1>
        <div className="row">
            <div className="col-5 ms-5">
                <img src={png} style={{width:"45%",height:"auto"}} alt="Not Found"/>
            </div>
            <div className="col-4">
                <div className="container p-5 me-5 ms-5" style={{backgroundColor:"#dedede",marginTop:"35px",color:"#003274" }}>
                    When we onboard our employees, its<br/>really quick and easy. We get a focus on<br/>making sure that they're okay and happy <br/>and being introduced to the company.
                    <div className="fw-bold">~Ashley Landazo<span style={{paddingLeft:"70px",color:"#FFD700"}}>&#9734;&#9734;&#9734;&#9734;&#9734;</span></div>
                    <div style={{color:"#003274"}}>Manager</div>
                </div>
            </div>
        </div>
    </div>

    </>);
}
export default Client;