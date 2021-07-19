import React from 'react';
import Boy1 from '../static/handsomeMan.png';
import "../css/Boy.css";
import Boy2 from "../static/Boy1.png";
import Boy3 from "../static/Boy2.png";
import Girl1 from "../static/Girl1.png";
import Girl2 from "../static/Girl2.png";



const Boy = () => {
    return (<>
    <div className="slant" style={{backgroundColor:"#0033ab",height:"184px",position:"relative",top:"128px"}}></div>
        <div className="container-fluid my-5" style={{ backgroundColor: "#0033ab"}}>
            <div className="row" style={{paddingTop:"100px"}}>
                <div className="col-lg-4 my-3" style={{ paddingLeft: "6rem" }}>
                    <img src={Boy1} className="img-fluid" style={{ height: "27rem" }} alt="Not Found" />
                </div>
                <div className="col-lg-6">
                    <div href="#" class="previous but">&#8592;</div>
                    <div href="#" class="next but">&#8594;</div>
                    <div className="container mx-5 p-4 px-5 nidhi" style={{ marginTop:"70px",marginBottom:"20px",backgroundColor: "#6d8fd8", borderRadius: "2rem", fontFamily: "Roboto,serif", fontSize: '1.7rem' }}>
                        <p className="text-light rounded-5" >When  we onboard our employees, its really<br /> quick and easy, We get to foucs on making <br />sure that they're okay and happy and being <br /> introduced to the company.</p>
                    </div>
                    <div className="container my-4" style={{paddingLeft:"10px" ,position:"relative",left:"80px"}}>
                        <div className="row ">
                            <div className="col-2"><img src={Girl1} className="rounded-circle img-fluid mx-2 pe-2" alt="Not Found" /></div>
                            <div className="col-2"><img src={Boy2} className="rounded-circle img-fluid mx-2 pe-1" alt="Not Found" /></div>
                            <div className="col-2"><img src={Boy3} className="rounded-circle img-fluid mx-2" alt="Not Found" /></div>
                            <div className="col-2"><img src={Girl2} className="rounded-circle img-fluid mx-2 ps-1" alt="Not Found" /></div>
                            <div className="col-2 mb-3"><img src={Girl1} className="rounded-circle img-fluid mx-2 ps-2" alt="Not Found" /></div>

                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}
export default Boy;