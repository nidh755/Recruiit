import React from "react";
import Friends from "../static/Friends.png";
import Payroll from "../static/Payroll.png";
import Benefits from "../static/Benefits1.png";
import Insurance from "../static/Insurance.png";

const Services = (props)=> {
    const images = [Payroll,Benefits,Insurance]
    const caption = ["Paying your people couldn't be easier","Paying your people couldn't be easier","Paying your people couldn't be easier"]
    const header = ["PAYROLL","BENEFITS","INSURANCE"]
    return(<>
    <h1 className="fw-bold" style={{marginLeft:"100px",marginBottom:"40px"}}>Our Services</h1>
    <div className="container">
        <div className="row">
        <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">             
                        <img src={Friends} alt="Not Found" />
                    </div>
                    <h4 style={{color:"#F700FF",marginLeft:"30px"}}>HR</h4>
                    <div className="text-primary" style={{marginLeft:"30px"}}>Manage your people with ease</div>
                    <button className="btn colorful text-light" style={{width:"140px",marginLeft:"100px",marginTop:"65px"}} >learn more ></button>
                </div>

            </div>
            {
                images.map((c,index)=>(

                    <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">             
                        <img src={c} alt="Not Found" />
                    </div>
                    <h4 style={{color:"#F700FF",marginLeft:"30px"}}>{header[index]}</h4>
                    <div className="text-primary" style={{marginLeft:"30px"}}>{caption[index]}</div>
                    <button className="btn colorful text-light" style={{width:"140px",marginLeft:"100px"}} >learn more > </button>
                </div>

            </div>


                ))

            }
            {/* <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">             
                        <img src={} alt="Not Found" />
                    </div>
                    <h3>{props.header}</h3>
                    <div>{props.caption}</div>
                    <button >learn more</button>
                </div>

            </div>

            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">             
                        <img src={props.images} alt="Not Found" />
                    </div>
                    <h3>{props.header}</h3>
                    <div>{props.caption}</div>
                    <button >learn more</button>
                </div>

            </div>

            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">             
                        <img src={props.images} alt="Not Found" />
                    </div>
                    <h3>{props.header}</h3>
                    <div>{props.caption}</div>
                    <button >learn more</button>
                </div>

            </div>

            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">             
                        <img src={props.images} alt="Not Found" />
                    </div>
                    <h3>{props.header}</h3>
                    <div>{props.caption}</div>
                    <button >learn more</button>
                </div>

            </div> */}
        </div>
    </div>
    </>);
}
export default Services;