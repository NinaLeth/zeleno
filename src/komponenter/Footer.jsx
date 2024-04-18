import mobilikon from "../assets/mobil_ikon.svg"
import mailikon from "../assets/mail_ikon.svg"
import instagram from "../assets/instagram_ikon.svg"
import facebook from "../assets/facebook_ikon.svg"
import linkedin from "../assets/linkedin_ikon.svg"

export default function Footer() {

    return (
        <>
        <section id="footer">
            <section>
            <h1>KONTAKT OS HER<span className="prik">.</span></h1>
            <br />
            <p>Skal vi hjælpe dig med at lave din hjemmeside ud fra et mere bæredygtigt perspektiv? <br />Så tøv ikke med at kontakte os! </p>
            <br /><br />
                <div id="kontaktoplysninger">
                    <div>
                    <img id="mobil" src={mobilikon} alt="Mobilikon, ring til os her" />
                    <p>+45 0000 0000</p>
                    </div>
                    
                    <div>
                    <br />
                    <img src={mailikon} alt="Mailikon, skriv til os her" />
                    <p>zeleno@mail.com</p>
                    </div>

                <div id="some">
                    <img src={instagram} alt="Instagramikon, følg os på instagram" />
                    <img src={facebook} alt="Facebookikon, følg os på facebook" />
                    <img src={linkedin} alt="LinkedInikon, følg os på linkedIn" />
                </div>
                </div>

            </section> 
        </section>

        
        </>
        
) }