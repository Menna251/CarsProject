import React from "react";
import { useEffect, useState } from "react";
import styles from "./AllCars.module.css"
import axios, { Axios } from "axios"

import carr from "../../assets/images/card/car3.png"
import star from "../../assets/images/card/star.png"
import user from "../../assets/images/card/user.png"
import air from "../../assets/images/card/d8wxke_2_.png"
import frame from "../../assets/images/card/Frame.png"

export default function AllCars(){
    const [cars,setCars] = useState([]);

    let getCars = async()=>{
        try {
            let response =await axios.get("https://freetestapi.com/api/v1/cars");
            let {data} = response;
            setCars(data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCars()
    },[])

    const [search, setSearch] = useState ('');
    console.log(search)



    return(
        <>
        <div className={styles.cars}>
            <div className="continer">
<div className={styles.deals}>
<button>
    POPULAR RENTAL DEALS
</button></div>
<h3>Most popular cars rental deals</h3>
<div className={styles.inputt}>
        <div className="input-group">
        <span className="input-group-text"><i className="fa-solid fa-location-dot"></i></span>
  <input type="text" className="form-control"  aria-label="Dollar amount (with dot and two decimal places)" placeholder="Search by name"/>
  
  <div className={styles.search}><button 
  className="btn btn-primary" type="submit">Search</button>
</div>
        </div></div>
                <div className="row">
                    {cars.map((car ) =>(
                        <div className="col-md-3 shadow" key={car.id}>
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
                </div></div><nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
        </>
    )
}