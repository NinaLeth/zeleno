//Nina & Marie

import { Link } from "react-router-dom";
import animation from "../assets/404.json";
import Lottie from "lottie-react";
import { useEffect} from "react";

export default function ErrorPage() {


    useEffect(() => {

        window.scrollTo(0, 0)
      
      }, [])


    return (
        <section className="dark">
            <div id="webinarside">
            <h1>DENNE SIDE HAR VI SPARET VÆK<span className="prik">.</span></h1>
            <br />
            <Link to="/">TILBAGE TIL FORSIDEN</Link>
            <Lottie id="firenulfire" animationData={animation} loop={true} />
            </div>
        </section>
    )}