import { useEffect, useState } from "react";
import Webinar from "../komponenter/Webinar";

export default function WebinarPage() {


const [posts, setPosts] = useState([]);
const [isPosts, setIsPosts] = useState(true);
const [status, setStatus] = useState("");

const [virksomhed, setVirksomhed] = useState("");
const [navn, setNavn] = useState("");
const [deltager, setDeltager] = useState("");
const [email, setEmail] = useState("");
const [mobilnummer, setMobilnummer] = useState("");
const [webinar, setWebinar] = useState("");

    useEffect(() => {
        async function getPosts() {
            const url = "https://zeleno-dc235-default-rtdb.europe-west1.firebasedatabase.app/webinar.json";
            const response = await fetch(url);
            const data = await response.json();

            if (data !== null) {
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setPosts(postsArray);
            } else {
                setIsPosts(false);
            }
        }
        getPosts();
    }, []);


    function handleInputChange(event) {
        const { value, checked } = event.target;

        if (checked) {
            setWebinar([...webinar, value]);
        } else {
            const index = webinar.indexOf(value); 
            webinar.splice(index, 1);
            setWebinar([...webinar]); 
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (webinar.length > 0) {
            const url = "https://zeleno-dc235-default-rtdb.europe-west1.firebasedatabase.app/kunder.json";

            const formData = {
                webinar: webinar,
                virksomhed: virksomhed,
                navn: navn,
                deltager: deltager,
                email: email,
                mobilnummer: mobilnummer,
            };

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Fejl ved gemning af formular');
                }
                setStatus('Booking er afsendt');
            })
            .catch((error) => {
                setStatus('Fejl ved booking:', error);
            });
        } else {
            setStatus("Du skal vælge mindst ét webinar.");
        }
    }

    return (

            <section className="dark">
                <div id="webinarside">
                    <h1>BOOK ET WEBINAR<span className="prik">.</span></h1>
                    <br />
                    <p>Vi kan ikke stå for alle hjemmesider i verden. Derfor er det vigtigt for os at få delt ud af vores viden, så bæredygtigt webdesign kan blive mere udbredt. 
                    Vi afholder løbende webinarer hvor du helt gratis kan lære om bæredygtigt webdesign, og hvordan du implenterer det i din egen virksomhed. Vores webinarer har forskellige fokusområder, men omhandler alle bæredygtigt webdesign<br /><br />Vælg ét på listen og tilmeld din virksomhed nedenfor ↓</p>
                    {isPosts ? (
                        <form onSubmit={handleSubmit}>
                            {posts.map((webinarobjekt) => (
                                <div className="webinar_kasse">
                                <Webinar key={webinarobjekt.id} webinar={webinarobjekt} handleInput={handleInputChange} />
                                </div>
                            ))}
                            <br />
                            <br />
                            <h3>HVOR KOMMER I FRA<span className="prik">?</span></h3>
                            <input className="webinar_kasse"
                                type="text"
                                name="virksomhed"
                                placeholder="Din virksomheds navn"
                                value={virksomhed}
                                onChange={(e) => setVirksomhed(e.target.value)}
                                required 
                            />
                            <h3>HVAD ER DIT NAVN<span className="prik">?</span></h3>
                            <input className="webinar_kasse"
                                type="text"
                                name="navn"
                                placeholder="Navn Efternavn"
                                value={navn}
                                onChange={(e) => setNavn(e.target.value)}
                                required 
                            />
                            <h3>HVOR MANGE KOMMER I<span className="prik">?</span></h3>
                            <input className="webinar_kasse"
                                type="number"
                                name="deltager"
                                placeholder="3"
                                value={deltager}
                                onChange={(e) => setDeltager(e.target.value)}
                                required 
                            />

                        
                            <h3>DEN E-MAIL WEBINARET SKAL SENDES TIL<span className="prik">:</span></h3>
                            <input className="webinar_kasse"
                                type="email"
                                name="email"
                                placeholder="mail@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                             <h3>DET TELEFONUMMER VI MÅ SKRIVE TIL, HVIS DER SKER ÆNDRINGER<span className="prik">:</span></h3>
                            <input className="webinar_kasse"
                                type="number"
                                name="mobilnummer"
                                placeholder="+45 00000000"
                                value={mobilnummer}
                                onChange={(e) => setMobilnummer(e.target.value)}
                                required
                            />
                            {status}
                            <button className="knap" type="submit">TILMELD</button>
                        </form>
                    ) : (
                        <p>Ingen webinarer at vise</p>
                    )}
                </div>
            </section>

            
    )
}