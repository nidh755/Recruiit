import React from "react";
import completeHr from "../static/completeHr.png";
import "../css/complete.css";

const CompleteHR = ()=>{
    return(<>
<div className="text-center">
    <h1 className="fw-bold" style={{color:"#003274"}}>A Complete HR Platform</h1>
    <div className="text-muted">Managing your people is complex.The recruit<br/> platform helps you in areas that matters most</div>
</div>
<div className="container-fluid">
    <div className="row">
        <div className="col-6 " style={{fontSize:"18px",marginTop:"105px",paddingLeft:"130px"}}>
            <div className="p-2 prop mb-4">Improve Employee Experience</div>
            <div className="p-2 prop mb-4">Hire and Retain Top Talent</div>
            <div className="p-2 prop mb-4">Improve Productivity</div>
            <div className="p-2 prop mb-4">Reduce Errors</div>
        </div>
        <div className="col-6">
            <img src={completeHr} style={{height:"550px",width:"auto"}} alt="Not Found" />
        </div>
    </div>
</div>

    </>);
}
export default CompleteHR;