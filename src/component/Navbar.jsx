import React from "react";
import "../css/Navbar.css";
import AddNewEmployee from "./AddNewEmployee";
import JobDetailsCard from "./JobDetailsCard";
import TopCard from "../static/TopCard.png";
import TopCard2 from "../static/TopCard2.png";
import TopCard3 from "../static/TopCard3.png";

// const Navbar = () => {
//   return (
//     <>
//       <div className="gradient top-header">
//         <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
//           <div className="container-fluid">
//             <a className="navbar-brand text-light" href="#">
//               TRIPUPP HR
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active text-light pe-5"
//                     aria-current="page"
//                     href="#"
//                   >
//                     HOME
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-light pe-5" href="#">
//                     PAYROLLS
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-light pe-5" href="#">
//                     BENEFITS
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-light pe-5" href="#">
//                     PRICING
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link text-light pe-5" href="#">
//                     WORK WITH US
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <button type="button" class="btn btn-light blank">
//           Light
//         </button>
//         <div className="row position-relative">
//           <div className="col-6 px-5 pt-5 ml-5">
//             <button className="rounded-x-btn fw-bold try-free-btn px-3 h5 p-2">
//               Try For Free Now ! &nbsp; &nbsp; {`>`}
//             </button>
//             <div className="h1 mt-5 text-white">
//               Set Your Business Up With Modern Payroll, Benefits, And HR.
//             </div>
//             <div>
//               <div className="get-started d-inline-block p-2">
//                 <span className="">@ Your Email address &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
//                 <button className="btn-primary text-white p-2 ml-5">Get Start</button>
//               </div>
//             </div>
//             <div className="my-3">Our Plans were built to fit your unique needs. Streamline <br/> onboarding, benefits, payroll, PTO and more with out <br/> simple, intutive platform.</div>
//           </div>
//           <div className="col-6 row p-3">
//             <AddNewEmployee/>
//             <JobDetailsCard/>
//             {/* <img src={TopCard} alt="Not Found" /> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const Navbar = () => {
  return (
  <>
      <div className="gradient top-header mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand text-light fw-bold" href="#">
              RECRUIIT
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-light pe-5"
                    aria-current="page"
                    href="#"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light pe-5" href="#">
                    PAYROLLS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light pe-5" href="#">
                    BENEFITS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light pe-5" href="#">
                    INSURANCE
                  </a>
                </li>
    
                <li className="nav-item">
                  <a className="nav-link text-light pe-5" href="#">
                    COMPANY 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light pe-5" href="#">
                    PRICING
                  </a>
                </li>
                <li className="nav-item position-absolute" style={{right:"10px",zIndex:"20"}} >
                  <a className="nav-link text-light" href="#">
                    SIGN IN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          
        <button className="rounded-x-btn fw-bold try-free-btn text-light position-relative px-3 h5 p-1" style={{marginTop:"70px",marginLeft:"80px"}}>
               Try For Free Now ! &nbsp; &nbsp; {`>`}
             </button>
             <div className="h1 mt-5 text-white tasty">
               Set Your Business Up <br/> With Modern Payroll,<br/> Benefits, And HR.<br/>
               <div className="get-started d-inline-block p-2 mt-4" style={{fontSize:"3vh"}}>
                 <span className="">@ Your Email address &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                 <button className="btn-primary text-white p-2 ml-5">Get Start</button>
               </div>
               <div className="mt-5 text-muted text-dark" style={{fontSize:"3vh"}}>Our plans were built to fit your unique needs. Streamline <br/> onboarding, benefits, payroll, PTO and more with out <br/> simple, intutive platform.</div>
             </div>
             
          <img src={TopCard} className="img-fluid img1" style={{backgroundColor:"transparent"}} alt="Not Found"/>
          <img src={TopCard2} className="img2" alt="Not found"/>
          <img src={TopCard3} className="img3" alt="Not Found"/>
        </div>
  </div>
  </>);
}





      export default Navbar;
