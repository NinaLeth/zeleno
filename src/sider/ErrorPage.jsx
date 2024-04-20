import { Link } from "react-router-dom";
import animation from "../assets/404.json";
import Lottie from "lottie-react";

export default function ErrorPage() {

    return (
        <section className="dark">
            <div id="webinarside">
            <h1>DENNE SIDE HAR VI SPARET VÆK<span className="prik">.</span></h1>
            <Link to="/">TILBAGE TIL FORSIDEN</Link>
            <Lottie id="firenulfire" animationData={animation} loop={true} />
            </div>
        </section>
    )}