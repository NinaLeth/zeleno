import titel from "../assets/omostitel.svg"
import info from "../assets/info.png"
import holdet from "../assets/holdet.svg"
export default function OmosPage() {

    return (
        <>
            <div className="dark">
                <section className="omos">
                    <img className="titel" src={titel} alt="" />
                    <h4>... Et lille hold på 4 uddannede multimediedesignere, der specialiserer sig i bæredygtigt webdesign.</h4>
                    <p>
                    At internettet overhovedet sviner er en kendsgerning, mange ikke er klare over. Selv når det kommer til folk, der beskæftiger sig med webudvikling og/eller bæredygtighed til dagligt, er der stor udvidenhed om emnet. Vi tog navnet Zeleno (der betyder grøn på flere sprog) til os i foråret 2024, hvor vi besluttede at tilslutte os kampen for den grønne omstilling. Vi ville gøre web-branchen grønnere og mere bæredygtig - selvom vi kun lige var blevet en del af den. Nu bruger vi derfor alt vores energi på at bruge så lidt energi som overhovedet muligt - og lære andre hvordan de gør det samme. 
                    </p>
                    <h3>SÅDAN HAR DU INDFLYDELSE PÅ DIT SITES ENERGIFORBRUG</h3>
                    <img id="titel" src={info} alt="Info" />
                    <p>
                    Valg af <b>filtyper</b>, hvem der <b>hoster</b> dit website, og hvordan du benytter dig af <b>billeder og video</b> er alt sammen noget, der spiller en rolle for dit sites <b>samlede energiforbrug.</b> <br /><br />

                    Hos Zeleno arbejder vi med systemfonte. Det er fonte der allerede findes på din computer, og altså ikke først skal hentes ned andetsteds fra. Vi bruger desuden også darkmode på vores hjemmeside da det kræver mindre energi for din skærm at vise mørke farver end det gør at vise lyse. 
                    <br /><br />
                    Der er altså mange steder at tage fat, uanset hvilken type site du har, og hvordan det ser ud lige nu. Kunne du tænke dig at vide mere, opfordrer vi stærkt til at du tjekker vores webinare ud - her dykker vi med jævne mellemrum ned i de forskellige facetter af bæredygtigt webdesign. Altid nøje struktueret af en af os, med mulighed for at stille spørgsmål til sidst!
                    </p>

                    <img className="titel" src={holdet} alt="Holdet" />
                    
                </section>

            </div>
        </>
    )
}