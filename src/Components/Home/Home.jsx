import React, { useEffect, useState } from "react";
import logo from "../../assets/images/nav/logo.png"
import carimg from "../../assets/images/part1/car 2 1.png"
import carr from "../../assets/images/card/car3.png"
import star from "../../assets/images/card/star.png"
import user from "../../assets/images/card/user.png"
import frame from "../../assets/images/card/Frame.png"
import air from "../../assets/images/card/d8wxke_2_.png"
import location from "../../assets/images/landing-page/location.png"
import caricon from "../../assets/images/landing-page/car-icon.png"
import jaguar from "../../assets/images/landing-page/jaguar.png"
import nissan from "../../assets/images/landing-page/nissan.png"
import volvo from "../../assets/images/landing-page/volvo.png"
import audi from "../../assets/images/landing-page/audi.png"
import audi1 from "../../assets/images/landing-page/sec-5/Audi 1.png"
import userr from "../../assets/images/landing-page/sec-5/user.png"
import message from "../../assets/images/landing-page/sec-5/message.png"
import chat from "../../assets/images/landing-page/sec-5/chat.png"
import boy from "../../assets/images/landing-page/sec-6/boy.png"
import girl from "../../assets/images/landing-page/sec-6/girl.png"
import imagefooter from "../../assets/images/footer/logo-footer.png"
import locationfooter from "../../assets/images/footer/location.png"
import andriod from "../../assets/images/landing-page/andriod.png"
import ios from "../../assets/images/landing-page/ios.png"
import iphone from "../../assets/images/landing-page/sec-7/iPhone-14.png"
import callfooter from "../../assets/images/footer/call.png"
import smsfooter from "../../assets/images/footer/sms.png"
import facebook from "../../assets/images/footer/facebook.png"
import instagram from "../../assets/images/footer/instagram.png"
import youtube from "../../assets/images/footer/youtube.png"
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import axios, { Axios } from "axios"
import Details from "../Details/Details.jsx"


export default function Home(){
    const [cars,setCars] = useState([]);

    let getCars = async()=>{
        try {
            let response =await axios.get("https://freetestapi.com/api/v1/cars?limit=4");
            let {data} = response;
            setCars(data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCars()
    },[])

    const url =""
    const [data,setData] =useState({
      nameuser:"",
      phonenumber:"",
      email:""
})


   
    function submit(e){
      e.preventDefault();
      Axios.post(url,{
        nameuser: data.nameuser,
        phonenumber: data.phonenumber,
        email: data.email
      })
      .then(res =>{
        console.log(res.data)
      })
    }
    function handle(e){
      const newdata={...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata)
    }
    return(
        <>
        <div className={styles.navbarr}>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img src={logo} alt="logo"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" href="#">Become a renter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Rental deals</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">How it work</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Why choose us</Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn" type="submit">Sign in</button>
        <button className="btn btn-primary" type="submit">Sign up</button>
      </form>
    </div>
  </div>
</nav>
        </div>

        <div className={styles.partone}>
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-4">
                    <h3>Find, book and rent a car <span>Easily</span></h3>
                    <p>Get a car wherever and whenever you<br/> need it with your IOS and Android device</p>
                </div>
                <div className="col-md-8">
                    <div className={styles.img1}>
                    <img src={carimg} alt="car"></img></div>
                </div>
            </div></div>
        </div>
       

       
        <div className={styles.search}>
        <div className="input-group">
        <span className="input-group-text"><i className="fa-solid fa-location-dot"></i></span>
  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Search by name"/>
  <button onChange={(e)=> setsearch(e.target.value)}
  className="btn btn-primary" type="submit">Search</button>
</div>
<div className={styles.deals}>
<button>
    POPULAR RENTAL DEALS
</button></div>
        </div>

        <div className={styles.cars}>
            <div className="continer">
                <h3>Most popular cars rental deals</h3>
                <div className="row">
                    {cars.map((car )=>(
                        <div className="col-md-3 shadow">
                          <div className={styles.carsone}>
                            <div>
                                {car.urlToImage ?(
                                    <img src={car.image} alt="img" />
                                ) :(
                                    <img src={carr} alt="" />
                                )}
                                <h4>{car.make} {car.model}</h4>
                                <div className={styles.pad}>
                                <div className="d-flex align-items-baseline">
                                <img src={star}></img><h6>4.6</h6><small>(1345 reviews)</small></div></div>
                                <div className={styles.pad}>
                                <div className="d-flex align-items-baseline row">
                                 <div className="col-md-6"> <img src={user}></img><small>2Passenger</small></div>
                                  <div className="col-md-6"><img src={air}></img><small>Air conditioning</small></div>
                                </div></div>
                                <div className={styles.pad}>
                                <div className="d-flex align-items-baseline row">
                                <div className="col-md-6"><small><span><i className="fa-solid fa-calendar-days"></i></span> {car.year} </small></div>
                                <div className="col-md-6"><img src={frame} ></img><small>{car.transmission}</small></div>
                                </div></div>
                                </div>
                                <div className={styles.pad}>
                                <div className="d-flex align-items-baseline row">
                                    <div className="col-md-6"><small>price</small></div>
                                    <div className="col-md-6"><small><span>{car.price}</span>/day</small></div>
                                    </div></div><hr/>
                                    <div className={styles.bbtn}>
                                    <a className="btn btn-primary" href="details">view details <i className="bi bi-arrow-right"></i></a>
                                      </div>
                                </div></div>
                    )
                    )}
                </div>
                <div className={styles.searchbtn}>
                <a className="btn btn-outline-secondary px-5" href="allCars">
                  Show all vehicles</a></div>
                </div></div>

                <div className={styles.mostpop}>
                  <div className="container">
                    <h3>Most popular cars rental deals</h3>
                    <div className="row">
                      <div className="col-md-4">
                        <div className={styles.icon}>
                          <img src={location}></img>
                          <h4>Choose location</h4>
                          <p className="text-muted">Choose your and find your best car</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={styles.icon}>
                          <img src={caricon}></img>
                          <h4>Pick-up date</h4>
                          <p className="text-muted">Select your pick up date and time to book your car</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={styles.icon}>
                          <img src={location}></img>
                          <h4>Book your car</h4>
                          <p className="text-muted">Book your car and we will deliver it directly to you</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div className={styles.images}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <img src={jaguar} alt="image"></img>
                      </div>
                      <div className="col-md-3">
                        <img src={nissan} alt="image"></img>
                      </div>
                      <div className="col-md-3">
                        <img src={volvo} alt="image"></img>
                      </div>
                      <div className="col-md-3">
                        <img src={audi} alt="image"></img>
                      </div>
                    </div>
                  </div>
                </div>


                <div className={styles.choose}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className={styles.choosecar}>
                        <img src={audi1} alt="car"></img></div>
                      </div>
                      <div className="col-md-6">
                        <button>Why Choose Us</button>
                        <h3>We offer the best experience with our rental deals</h3>
                        <div className={styles.choosecard}>
                        <div className="d-flex align-items-center">
                          <img src={userr}></img>
                          <div className={styles.article}>
                          <h6>Best price guaranteed</h6>
                          <p>Find a lower price? We’ll refund you 100% of the difference.</p></div></div>
                        </div>
                        <div className={styles.choosecard}>
                        <div className="d-flex align-items-center">
                          <img src={userr}></img>
                          <div className={styles.article}>
                          <h6>24 hour car delivery</h6>
                          <p>Book your car anytime and we will deliver it directly to you.</p></div></div>
                        </div>
                        <div className={styles.choosecard}>
                        <div className="d-flex align-items-center">
                          <img src={message}></img>
                          <div className={styles.article}>
                          <h6>Best price guaranteed</h6>
                          <p>Find a lower price? We’ll refund you 100% of the difference.</p></div></div>
                        </div>
                        <div className={styles.choosecard}>
                        <div className="d-flex align-items-center">
                          <img src={chat}></img>
                          <div className={styles.article}>
                          <h6>24/7 technical support</h6>
                          <p>Have a question? Contact Rentcars support any time when you have problem.</p></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className={styles.part6}>
                  <div className="container">
                  <div className={styles.part6btn}><button>TEST IMONIALS</button></div>
                  <h3>Most popular cars rental deals</h3>
                  <div className="row">
                  <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className=" d-flex align-items-center">
                      <img src={boy}></img>
                      <div className="card-body">
                        <div className="card-title">
                          <h4>5.5 Stars</h4>
                         <p><img src={star}></img><img src={star}></img>
                         <img src={star}></img><img src={star}></img>
                         <img src={star}></img></p> 
                         <p className="card-text">“I feel very secure when using caretall's services.
                           Your customer care team is very enthusiastic and the driver is always on time.”</p>
                           <div className={styles.finalcard}>
                            <p>Charlie Johnson</p>
                            <small>Last updated 3 mins ago</small>
                           </div>
                        </div>
                      </div></div>
                  </div></div>
                  <div className="col-md-6 col-sm-12">
                  <div className="card">
                    <div className=" d-flex align-items-center">
                      <img src={girl}></img>
                      <div className="card-body">
                        <div className="card-title">
                          <h4>5.5 Stars</h4>
                         <p><img src={star}></img><img src={star}></img>
                         <img src={star}></img><img src={star}></img>
                         <img src={star}></img></p> 
                         <p className="card-text">“I feel very secure when using caretall's services.
                           Your customer care team is very enthusiastic and the driver is always on time.”</p>
                           <div className={styles.finalcard}>
                            <p>Charlie Johnson</p>
                            <small>Last updated 3 mins ago</small>
                           </div>
                        </div>
                      </div></div>
                  </div></div></div></div></div>

                  <div className={styles.download}>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <h3>Download Rentcars App for <span>FREE</span></h3>
                          <p>For faster, easier booking and exclusive deals.</p>
                          <div className={styles.downloadimg}>
                          <div className="d-flex">
                            <img src={andriod} className="me-2"></img>
                            <img src={ios}></img>
                          </div></div>
                          <form onSubmit={(e)=> submit(e)}>
                            <input onChange={(e)=>handle(e)} id="name" value={data.nameuser}
                             className="form-control my-1 px-3" type="text" placeholder="Name"/>
                            <input onChange={(e)=>handle(e)} id="number" value={data.phonenumber}
                            className="form-control my-1 px-3" type="text" placeholder="Phone Number" />
                            <input onChange={(e)=>handle(e)} id="email" value={data.email}
                            className="form-control my-1 px-3" type="text" placeholder="Email" />
                          </form>
                       <div className="d-flex justify-content-center my-2"> 
                       <button className="btn btn-primary px-5" type="submit">Send</button></div>
                        </div>
                        <div className="col-md-4">
                          <img src={iphone}></img>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.footer}>
                    <div className="conatiner">
                      <div className="row">
                        <div className="col-md-3">
                          <img src={imagefooter}></img>
                          <div className={styles.part1foot}>
                            <div className={styles.footerpt}>
                            <div className="d-flex">
                              <img src={locationfooter}></img>
                              <small>25566 Hc 1, Glenallen,
                              Alaska, 99588, USA</small>
                            </div></div>
                            <div className={styles.footerpt}>
                            <div className="d-flex">
                              <img src={callfooter}></img>
                              <small>+603 4784 273 12
                              </small>
                            </div></div>
                            <div className={styles.footerpt}>
                            <div className="d-flex">
                              <img src={smsfooter}></img>
                              <small>rentcars@gmail.com</small>
                            </div></div>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <h6>Our Products</h6>
                          <div className={styles.part1foot}>
                            <small>Career</small><br/>
                            <small>Car</small><b/>
                            <small>Packages</small><br/>
                            <small>Features</small><br/>
                            <small>Priceline</small>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <h6>Resources</h6>
                          <div className={styles.part1foot}>
                            <small>Download</small><br/>
                            <small>Help Centre</small><br/>
                            <small>Guides
                            </small><br/>
                            <small>Partner Network</small><br/>
                            <small>Cruises</small><br/>
                            <small>Developer</small>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <h6>About Rentcars</h6>
                          <div className={styles.part1foot}>
                            <small>Why choose us</small><br/>
                            <small>Our Story</small><br/>
                            <small>Investor Relations</small><br/>
                            <small>Press Center</small><br/>
                            <small>Advertise</small>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <h6>Follow Us</h6>
                          <div className={styles.part1foot}>
                          <div className="d-flex row">
                            <div className="col-md-3">
                            <img src={facebook}></img></div>
                            <div className="col-md-3">
                            <img src={instagram}></img></div>
                            <div className="col-md-3">
                            <img src={youtube}></img></div>
                          </div>
                        </div></div>
                      </div>
                      <hr className={styles.hr}></hr>
                      <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
                    </div>
                  </div>
        </>
                )}
