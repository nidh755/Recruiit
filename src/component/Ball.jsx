import React from "react";
import Balling from "../static/Ball.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const Ball= ()=> {
    return(<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <img src={Balling} className="img-fluid" alt="Not Found" />
            </div>
            <div className="col-6 text-center mt-5">
                <div className="p-3 fw-bold " style={{color:"#003274"}}>Compilance,accuracy,<br/><FontAwesomeIcon icon={faCheckCircle} size="1x" /> and peace of mind.</div>
                <div className="p-3 fw-bold " style={{color:"#003274"}}>Automatically files <br/><FontAwesomeIcon icon={faCheckCircle} size="1x" />your payroll taxes.</div>
                <div className="p-3 fw-bold " style={{color:"#003274"}}>Unlimited payrolls.<br/><FontAwesomeIcon icon={faCheckCircle} size="1x" />Clear pricing<br/>No surprises.</div>
                
            </div>
        </div>
    </div>
        
    
    </>);
}
export default Ball;