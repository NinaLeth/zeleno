import { Link } from "react-router-dom";
import animation from "../assets/fire_cirkler.json";
import Lottie from "lottie-react";

export default function ErrorPage() {

    return (
        <section className="dark">
            <div id="webinarside">
            <h1>DENNE SIDE HAR VI SPARET VÆK</h1>
            <Link to="/">☞ TILBAGE TIL FORSIDEN</Link>
            <Lottie id="animation" animationData={animation} loop={true} />
            </div>
        </section>
    )}