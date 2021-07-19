import React from "react";
import Employees from "../static/Employees.png";
import JobDetail from "../static/JobDetail.png";
import JackWilliams from "../static/JackWilliams.png";
import "../css/Benefits.css";

const Hr1 = () => {
return(
<>
<div className="container-fluid" style={{backgroundColor:"#b6f2fg"}}>
    <div className="row mt-5 p-5">
        <div className="col-lg-4 " style={{color:"#003274",marginLeft:"80px"}}>
            <div className="fw-bold" style={{fontSize:"55px"}}>HR</div>
            <h5 className="text-muted">Manage your<br/> people with ease.</h5>
        </div>
        <div className="col-lg-6 text-muted khire" style={{marginLeft:"85px"}} >
            <div className="pb-2 fw-bold">Recruit has all Hr tools that make managing your people </div>
            <div className="pb-2 fw-bold">easy, from streamlined onboarding and easy.PTO tracking to</div>
            <div className="pb-2 fw-bold">any charts, performance reviews, and so much more.</div>
        </div>
    </div>
    <div className="row text-center">
        <div className="col-lg-5">
            {/* <Employees/> */}
            <img src={Employees} className="img-fluid1 " alt="Not Found" />
        </div>
        <div className="col-lg-7">
            {/* <JobDetail/> */}
            {/* <JackWilliams/> */}
            <img src={JobDetail} className="img-fluid1" alt="Not Found" />
            <img src={JackWilliams} className="img-fluid1" alt="Not Found" />
            
        </div>
    </div>

</div>
{/* <div className="slant2" style={{height:"100px",backgroundColor:"#c9f3f5",position:"relative",top:"-54px"}}></div> */}
</>);
}
export default Hr1;