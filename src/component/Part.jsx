import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faMitten, faMedkit } from "@fortawesome/free-solid-svg-icons";
const Part = () => {
    return (<>
        <div className="container" >
            <div className="row ">
                <div className="col-lg-4  text-center ">
                    <FontAwesomeIcon icon={faUmbrella} size='4x' />
                    <p className="text-primary pt-4">Our benefits are designed to.<br /> be accessbile to all </p>
                </div>
                <div className="col-lg-4 text-center ">
                    <FontAwesomeIcon icon={faMitten} size='4x' />
                    <p className="text-primary pt-4">A healthy team can better <br /> support your business and your bottom line.</p>
                </div>
                <div className="col-lg-4 text-center ">
                    <FontAwesomeIcon icon={faMedkit} size='4x' />
                    <p className="text-primary pt-4">Become a business where <br /> talented people want to <br /> work  and stick around.</p>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <span className="h1 fw-bolder" style={{fontFamily: 'Cormorant Garamond, serif'}}>A Complete HR<br/>Platform<br/>Saves You<br/>Time.</span>

                </div>
                <div className="col-lg-6">
                    <span className="text-muted fw-bold"> TripUpp streamlines your workflow by <br/> automatically<br/>connecting HR, Benefits,Payroll and <br/> Scheduling, together in one platform.This <br/> means less time spent on low-priority <br/> tasks so your team can focus on more <br/> important things.</span>
                </div>
            </div>

        </div>
    </>);
}
export default Part;