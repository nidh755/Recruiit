import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import "../css/Benefits.css";
import DebitCard from "../static/debitcard.png";
import Benefit from "../static/Benefits.png";
import Benefits2 from "../static/Benefits2.png";

// const Benefits = () => {
//     return (<>
//         <div className="fluid-container" style={{ backgroundColor: "#0033ab" }}>
//             <div className="text-light my-5 pt-5 ps-5"><FontAwesomeIcon icon= {faClipboard} size='3x' /><span className="h2 px-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Benefits </span>Finally, employee benefits for every business.</div>
//             <div className="row">
//                 <div className="col-lg-5" style={{paddingLeft:"10rem"}}>
//                     {/* <div className="card ps-4 pt-4 mb-4">
//                         <p className="h2" >Benefits</p>
//                         <p>Select the Medical plan <br/>that's Best for You and Your Family</p>
//                         <div class="progress progress-danger p-lg-2 m-lg-2 ">
//                             <div class="bar" style={{ width: "80%" }}></div>
//                         </div>
//                         <div class="progress progress-danger p-lg-2 m-lg-2">
//                             <div class="bar" style={{ width: "80%" }}></div>
//                         </div>
//                         <span class="me-3 px-4 py-5 mb-5" style={{border:"4px solid #ff5959",borderRadius:"1rem" }}>
//                             <p >Blue Cross <br/> PPO Direct HSA 3K</p>
//                             <div class="progress progress-danger p-lg-2 m-lg-2 ">
//                             <div class="bar" style={{ width: "80%" }}></div>
//                         </div>
//                         <div class="progress progress-danger p-lg-2 m-lg-2">
//                             <div class="bar" style={{ width: "80%" }}></div>
//                         </div>
//                         <h1>$393</h1>
//                         </span> */}
//                         <img src={Benefit} className="img-fluid" alt="Not Found" />
//                     </div>

//                 </div>
//                 <div className="col-lg-6 pe-5" style={{paddingLeft:"8rem",paddingRight:"18rem"}}>
//                     {/* <div className="card ps-4 pt-3 debit" style={{width:"25rem"}}>
//                         <p><span>Tripupp</span ><span style={{paddingLeft:"12rem"}} className="text-light">Benefits Card</span></p>
//                         <h2 >1234  5678  9000  0000</h2>
//                         <p className="text-muted " style={{fontSize:"0.8rem"}}><span>1234</span><span style={{paddingLeft:"10rem"}}>VALID<br/></span><span style={{paddingLeft:"11rem"}}>THRU&nbsp;</span>12/19</p>
//                         <p className="h4 pb-2">MICHEAL WILLIAM'S</p>
//                     </div> */}
//                     <img src={DebitCard} className="img-fluid" alt="Not Found" />

//                 </div>

//             </div>

//     </>);
// }
// export default Benefits;


const Benefits = () => {
    return (<>
    <div className="slant4" style={{height:"156px",backgroundColor:"#0033ab",position:"relative",top:"47px"}}></div>
        <div className="fluid-container " style={{ backgroundColor: "#0033ab",zIndex:"100" }}>
            <div className="text-light mb-5 ps-5" ><FontAwesomeIcon icon={faClipboard} size='3x' /><span className="h2 px-4" style={{ fontFamily: 'Cormorant Garamond, serif',zIndex:"200" }}>Benefits </span>Finally, employee benefits for every business.</div>
            <div className="row">
                <div className="col-lg-7 text-light "  >
                    <div className="fw-bold" style={{fontSize:"50px",paddingLeft:"160px"}}>Benefits</div>
                    <div style={{paddingLeft:"160px"}}>Recruiit simplifies the process<br/> of curating, and providing<br/> great benefits to your people<br/> from comprehensive healthcare<br/>plans to perks like commuter<br/>benefits.</div>
                    <img src={Benefits2} className="img-fluid" alt="Not Found" />
                </div>
                <div className="col-lg-5">
                    <img src={DebitCard} style={{paddingRight:"240px",width:"100%",height:"auto"}} alt="Not Found" />
                    <img src={Benefit} style={{width:"90%",height:"auto"}} alt="Not Found" />
                </div>
            </div>
        </div>
        <div className="slant3" style={{height:"108px",backgroundColor:"#0033ab",position:"relative",top:"-55px"}}></div>
    </>);
}
export default Benefits;