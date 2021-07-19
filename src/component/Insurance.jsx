import React from "react";
import Recruitt from "../static/Recruiit.png";
import "../css/Insurance.css";
const Insurance = () => {
    return (<>
    <div className="slant" style={{backgroundColor:"#D6F2FB",height:"140px",position:"relative",top:"100px"}}></div>
        <div className="container-fluid" style={{backgroundColor:"#D6F2FB"}}>
            <div className="row mt-5">
                <div className="col-6 ps-5" style={{marginTop:"80px"}}>
                    <div className="fw-bold" style={{color:"#003274",fontSize:"50px",zIndex:"10"}}>Insurance </div>
                    <div className="fw-bold mb-5">Transform your employee<br />
                        healthcare experience.<br /></div>
                    <h5 className="text-muted pb-2">Best-in-class health</h5>
                      <h5 className="pb-1 text-muted">  insurance at an affordable</h5>
                      <h5 className="pb-1 text-muted"> rate. Your team wants</h5>
                      <h5 className="pb-1 text-muted"> health insurance that</h5>
                      <h5 className="pb-1 text-muted"> comes with no surprise,</h5>
                      <h5 className="pb-1 text-muted"> no hidden costs and no</h5>
                      <h5 className="pb-1 text-muted"> out of pocket expenses.</h5>
                      <h5 className="pb-1 text-muted"> Give them access to</h5>
                      <h5 className="pb-1 text-muted"> great care with Recruiit.</h5>
                </div>
                <div className="col-6">
                    <img src={Recruitt} className="img-fluid" alt="Not Found" />
                </div>
            </div>
        </div>
    </>);
}
export default Insurance;