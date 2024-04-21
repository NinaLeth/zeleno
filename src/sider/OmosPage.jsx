import titel from "../assets/omostitel.svg"
import info from "../assets/infografik.svg"
import holdet from "../assets/holdet.svg"
import family from "../assets/family.svg"
import marie from "../assets/marie.svg"
import nina from "../assets/nina.svg"
import kasper from "../assets/kasper.svg"
import amalie from "../assets/amalie 2.svg"

export default function OmosPage() {

    return (
        <>
            <div className="dark">
                <div id="omosstart">
                    <img src={titel} alt="Vi er Zeleno" />
                    <img src={family} alt="Det her er os" />
                </div>
                <section className="omos">
                    <h1>VI HJÆLPER DIG<span className="prik"> ...</span></h1>
                    <div className="tekstbox">
                        <p>
                             Med at hjælpe planeten.<br /><br /> I forået 2024 blev vi enige om, at slutte os til kampen for den grønne omstilling. Vi samlede os under navnet "Zeleno", der betyder grøn, og påbegyndte vores mission om at gøre internettet mere bæredygtigt.
                            <br /><br /> At internettet overhovedet sviner er en kendsgerning, mange ikke er klare over. Derfor ser vi det i Zeleno som vores pligt at udbrede bæredygtigt webdesign som både videnskab og praksis i så høj grad vi kan.<br /> <br /> Vi bruger vores energi på at bruge så lidt energi som overhovedet muligt - og hjælpe andre med at gøre det samme. 
                        </p>
                    </div>
                </section>
                    <div className="light">
                        <div id="info">
                            <br /><br /><br />
                            <h1>SÅDAN GØR VI DIT WEBSITE GRØNNERE<span className="prik">.</span></h1>
                            <br /><br /><br /><br />
                            <img id="titel" src={info} alt="Info" />
                          <p>
                            Valg af <b>filtyper</b>, hvem der <b>hoster</b> dit website, og hvordan du benytter dig af <b>billeder og video</b> er alt sammen noget, der spiller en rolle for dit sites <b>samlede energiforbrug.</b> <br /><br />
                            Hos Zeleno arbejder vi med systemfonte. Det er fonte der allerede findes på din computer, og altså ikke først skal hentes ned andetsteds fra. Vi bruger desuden også darkmode på vores hjemmeside da det kræver mindre energi for din skærm at vise mørke farver end det gør at vise lyse. 
                            <br /><br />
                            Der er altså mange steder at tage fat, uanset hvilken type site du har, og hvordan det ser ud lige nu. Kunne du tænke dig at vide mere, opfordrer vi stærkt til at du tjekker vores webinare ud - her dykker vi med jævne mellemrum ned i de forskellige facetter af bæredygtigt webdesign. Altid nøje struktueret af en af os, med mulighed for at stille spørgsmål til sidst!
                         </p>
                    </div>
                    </div>
                  

                    <img className="titel" src={holdet} alt="Holdet" />
                    <section id="holdet">
                            <div className="employee">
                                <img src={marie} alt="Marie" />
                                <p>Marie Hammelsvang <br /> Grafisk designer & Animator</p>
                            </div>
                            <div className="employee">
                                <img src={nina} alt="Nina" />
                                <p>Nina Leth Møller <br />Webudvikler</p>
                            </div>
                            <div className="employee">
                                <img src={kasper} alt="Kasper" />
                                <p>Kasper Grove Jakobsen<br />Creative Director</p> 
                            </div>
                            <div className="employee">
                                <img src={amalie} alt="Amalie" />
                                <p>Amalie  Senniksen<br />SEO-specialist</p> 
                            </div>
                    </section>

                    
               

            </div>
        </>
    )
}