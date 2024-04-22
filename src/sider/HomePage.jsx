import globe from "../assets/globe_ikon.svg"
import lup from "../assets/lup_ikon.svg"
import mega from "../assets/megafon_ikon.svg"
import scroller from "../assets/kvadrat_med_cirkel.json"
import el from "../assets/elpæregrafik 3.svg"
import animation from "../assets/fire_cirkler.json"
import forsideanimation from "../assets/Forsidelogo.json"
import storanimation from "../assets/mange_firkanter.json"
import Lottie from "lottie-react"
import { Link } from "react-router-dom"
import { useEffect} from "react";
export default function HomePage() {

    useEffect(() => {

        window.scrollTo(0, 0)
      
      }, [])


    return (
        <>
        <div className="dark">
            <div className="forside"> 
            <Lottie id="forsideanimation" animationData={forsideanimation} loop={false} />
            <img id="el" src={el} alt="Elpære billede med teksten lad os oplyse dig" />
            </div>

            <div className="fact">
                <div className="overskrift">
                    <h1>VIDSTE DU AT</h1>
                    <h1 className="prik">...</h1>
                </div>
                <div className="tekstbox">
                    <p>Internet brænder gennem cirka 3,7% af de globale kulstofemissioner, og den tendens vokser, da vores appetit for data fortsætter med at stige. Samtidig elsker vi webteknologien og hvordan den bruges til at skabe forbindelser, fremme kreativitet og styrke samfundet. <br /><br />Vi vil gerne hjælpe dig, med at tage et skridt i retning af at mindske vores digitale klimaaftryk og gøre vores online oplevelse mere bæredygtig. Måske kan vi endda vende det til vores fordel og finde måder at bruge teknologi til at bekæmpe klimaforandringerne.</p>
                </div>
                <div>
                    <div className="knap">
                        <Link to="/omos">LÆS MERE</Link>
                    </div>
                </div>
            </div>
        </div>
        <Lottie className="scroller" animationData={scroller} loop={true} />
        <div className="light">
            <div className="fact">
                <div className="overskrift">
                        <h1>SÅ HVORDAN ER MAN <br />BÆREDYGTIG PÅ NETTET
                        <h1 className="prik"> ?</h1></h1>
                        <br />
                </div>
                <p>Det og meget mere kan du finde svar på gennem vores <b>gratis</b> webinarer! <br />Vi afholder dem med jævne mellemrum, og du er velkommen uanset om du kommer fra en virksomhed eller er selvstændig.</p>
                <br /><br />
                <div className="knap">
                        <Link to="/webinar">SE WEBINARER</Link>
                    </div>   

            <Lottie id="fireprikker" animationData={animation} loop={true} />

            </div>
        </div>
        <div className="dark">
            <div className="services">
                <div className="overskrift">
                    <h1>HVAD KAN VI HJÆLPE DIG MED <h1 className="prik">?</h1></h1>
                </div>
                <section id="trekort">
                    <div className="kort">
                        <div className="kort_indhold">
                            <h2>WEBUDVIKLING</h2>
                            <img className="ikon" src={globe} alt="globe" />
                            <p>Vi skræddersyer din hjemmeside til dig efter <b>dine</b> ønsker og <b>vores</b> bæredygtighedsprincipper! <br /><br />
                            Få et design, der både tilfredsstiller dine kunder og din planet.
                            </p>
                        </div>
                        <div className="knap">
                        <Link to="/" onClick={() => { document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }); }}>KONTAKT OS</Link>
                    </div>
                    </div>
                    <div className="kort">
                        <div className="kort_indhold">
                            <h2>WEBANALYSE</h2>
                            <img className="ikon" src={lup} alt="lup" />
                            <p>Vi analyserer din hjemmeside, og finder frem til <b>hvor</b> bæredygtig den er! <br /><br /> Herefter kommer vi med vores bud på, hvad man ville kunne gøre for at gøre den <b>mere</b> bæredygtig...
                            <br /></p>
                        </div>
                        <div className="knap">
                        <Link to="/" onClick={() => { document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }); }}>KONTAKT OS</Link>
                    </div>
                    </div>
                    <div className="kort">
                        <div className="kort_indhold">
                            <h2>MARKETING</h2>
                            <img className="ikon" src={mega} alt="globe" />
                            <p>Vi hjælper også til med marketingsstrategier og SEO-optimering! <br /><br />
                            Skal vores superskarpe branding-afdeling  hjælpe jer med at hæve salgstallene? <br /><br />
                            </p>
                        </div>
                        <div className="knap">
                        <Link to="/" onClick={() => { document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }); }}>KONTAKT OS</Link>
                    </div>
                    </div>
                </section>
            </div>
            <Lottie id="mangefirkanter" animationData={storanimation} loop={true} />
        </div>

        </>
    )
}