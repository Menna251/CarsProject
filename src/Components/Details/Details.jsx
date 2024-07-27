import React from "react";
import Styles from "./Details.module.css"
import audi1 from "../../assets/images/landing-page/sec-5/Audi 1.png"
import user from "../../assets/images/card/user.png"
import air from "../../assets/images/card/d8wxke_2_.png"
import frame from "../../assets/images/card/Frame.png"
import doors from "../../assets/images/card/doors.png"

export default function Details(){
    return(
        <>
        <div className={Styles.details}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={Styles.carimg}><img src={audi1} alt="img"></img></div>
                    </div>
                    <div className="col-md-6">
                    <div className={Styles.part2}>
                        <button>Why Choose Us</button>
                        <h4>We offer the best experience with our rental deals</h4>
                        <p className="d-flex"><img src={user}></img> <small>2 Passanger</small></p>
                        <p className="d-flex"><img src={air}></img> <small>Air conditioning</small></p>
                        <p className="d-flex"><img src={frame}></img> <small>Automatic</small></p>
                        <p className="d-flex"><img src={doors}></img> <small>Doors</small></p>
                    </div></div>
                </div>
            </div>
        </div>
        </>
    )
}