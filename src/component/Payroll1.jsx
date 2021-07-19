import React from "react";
import RunPayroll from "../static/RunPayroll.png";
import Jack from "../static/Jack.png";
import "../css/Benefits.css";

const Payroll1 = () => {
    return (<>
        <div className="slant" style={{ height: "240px", backgroundColor: "#003274", position: "relative", top: "204px" }}></div>
        <div className="fluid-container " style={{ backgroundColor: "#003274", zIndex: "100" }}>
            <div className="text-light mb-5 ps-5" ><span className="h2 px-4" style={{ fontFamily: 'Cormorant Garamond, serif', zIndex: "200" }}>Benefits </span>Finally, employee benefits for every business.</div>
            <div className="row" style={{ paddingTop: "130px" }}>
                <div className="col-lg-5 text-light" style={{ paddingLeft: "140px" }}>
                    <div className="fw-bold mt-5" style={{fontSize:"45px"}}>Payroll</div>
                    <div className="mb-5" style={{fontSize:"20px"}}>Paying your people<br />
                        couldn't be easier<br /></div>
                    <div className="text-muted ">
                        <h5 className="pb-2">Recruiit makes paying<br /></h5>
                        <h5 className="pb-2">your people fast and<br /></h5>
                        <h5 className="pb-2">easy. With a few clicks,<br /></h5>
                        <h5 className="pb-2">you're done. But don't<br /></h5>
                        <h5 className="pb-2">worry, we didn't stop<br /></h5>
                        <h5 className="pb-2">there. Our payroll is<br /></h5>
                        <h5 className="pb-2">packed with advanced<br /></h5>
                        <h5 className="pb-2">features your company<br /></h5>
                        <h5 className="pb-2">needs as it grows larger<br /></h5>
                        <h5 className="pb-2">and more complex.<br /></h5>
                    </div>
                </div>
                <div className="col-lg-7">
                    <img src={Jack} className="img-fluid1" style={{ paddingRight: "240px" }} alt="Not Found" />
                    <img src={RunPayroll} className="img-fluid1 " alt="Not Found" />
                </div>
            </div>
        </div>

    </>);
}
export default Payroll1;