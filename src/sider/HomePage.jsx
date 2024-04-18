import stortlogo from "../assets/Logo.svg"
import globe from "../assets/globe_ikon.svg"
import lup from "../assets/lup_ikon.svg"
import mega from "../assets/megafon_ikon.svg"
import scroller from "../assets/kvadrat_med_cirkel.svg"
import animation from "../assets/fire_cirkler.json"
import elanimation from "../assets/elpæregrafik 2.json"
import Lottie from "lottie-react"
import { Link } from "react-router-dom"
export default function HomePage() {

    return (
        <>
        <div className="dark">
            <div className="forside">
            <img id="stortlogo" src={stortlogo} alt="stortlogo" />   
            <Lottie  id="elanimation" animationData={elanimation} loop={true} />
            </div>

            <div className="fact">
                <div className="overskrift">
                    <h1>VIDSTE DU AT</h1>
                    <h1 className="prik">...</h1>
                </div>
                <div className="tekstbox">
                    <p>Hvis internettet var et land ville det indtage 7. pladsen på listen over mest forurenende lande på verdensplan. <br /> Med xxxx ton CO2 udledt årligt forurener internettet x gange så meget som alt dansk industri til sammen...  Uden at ville tegne et for dystopisk billede af fremtiden er klimaets tilstand og vores rolle i det en kendsgerning vi bliver nødt til at forholde os til...
                    <br /><br /> Hos Zeleno specialicerer vi os i, at finde nye og mere bæredygtige måder at designe hjemmesider - uden at gå på kompromis med funktionalitet og estitik! Selvom det er umuligt at gøre en hjemmeside klimavenligt, er der en masse man kan gøre for at gøre sit webdesign mere bæredygtigt... Nogle af disse teknikker har endda også andre fordele som forbedret SEO & page-load-time</p>
                </div>
                <div>
                    <div className="knap">
                        <Link to="/omos">LÆS MERE</Link>
                    </div>
                </div>
            </div>
            <img className="scroller" src={scroller} alt="scroll og se figuren bevæge sig" />
        </div>

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
                        <Link to="/error">SE CASES</Link>
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
                        <Link to="/error">SE CASES</Link>
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
                        <Link to="/error">SE CASES</Link>
                    </div>
                    </div>

                </section>

            </div>
        </div>

        </>
    )
}