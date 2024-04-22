//Nina
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase-config';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import Kunder from "../komponenter/Kunder";

export default function MedarbejderPage() {

    useEffect(() => {

        window.scrollTo(0, 0)
      
      }, [])


    const [dato, setDato] = useState('');
    const [tid, setTidspunkt] = useState('');
    const [navn, setNavn] = useState('');


    const userInSession = sessionStorage.getItem('user');
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const [nyeKunder, setKunder] = useState([]);
    const [isPosts, setIsPosts] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        const url = "https://zeleno-dc235-default-rtdb.europe-west1.firebasedatabase.app/webinar.json";

        const formData = {
            dato: dato,
            tidspunk: tid,
            navn: navn
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
                throw new Error('Fejl ved gemning af formulardata');
            }
            setStatus('Webinar gemt i Firebase Realtime Database.');
        })
        .catch((error) => {
            setStatus('Fejl ved gemning af formulardata', error);
        });

        
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");

        async function getPost() {
            const url = "https://zeleno-dc235-default-rtdb.europe-west1.firebasedatabase.app/kunder.json";

            const response = await fetch(url);
            const data = await response.json();

            if (data !== null) {
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setKunder(postsArray);
            } else {
                setIsPosts(false);
            }
        }
        getPost();
    }, [user, loading, navigate]);

    async function handleLogout() {
        try {
            await signOut(auth);
            sessionStorage.removeItem('user');
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }

    function handleButton(event) {
        const id = event.target.value;
        const handling = event.target.dataset.knap;
        const url = `https://zeleno-dc235-default-rtdb.europe-west1.firebasedatabase.app/kunder/${id}.json`;

        if (handling === "skiftstatus") {
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'Kunde godkendt' }),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Fejl ved ændringer af status');
                }
                setStatus('Status blev ændret');
            })
            .catch((error) => {
                setStatus('Fejl ved ændring af status', error);
            });
        } else {
            fetch(url, {
                method: 'DELETE'
            })
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Fejl ved sletning af Kunde');
                }
                setStatus('Kunde blev slettet');
            })
            .catch((error) => {
                setStatus('Fejl ved sletning af Kunde', error);
            });
        }
    }



    return (
        <section className="dark">
            <div id="webinarside">
            <h1>OPRET NYT WEBINAR<span className="prik">.</span></h1>
            <br />
            <form onSubmit={handleSubmit}>
                <h3>DATO<span className="prik">:</span></h3>
                <input className="webinar_kasse" type="text"  placeholder="01-01-2001" value={dato} name="dato" onChange={(e) => setDato(e.target.value)} required/>
                <br />
                <h3>TID<span className="prik">:</span></h3>
                <input className="webinar_kasse" type="text" placeholder="00:00" value={tid} name="tid" onChange={(e) => setTidspunkt(e.target.value)} required />
                <br />
                <h3>NAVN<span className="prik">:</span></h3>
                <input className="webinar_kasse" type="text" placeholder="Navnet på dit webinar" value={navn} name="navn" onChange={(e) => setNavn(e.target.value)} required/>
                <br />
                {status}
                <br/>
                <button className="knap" type="submit">OPRET</button>
            </form>
                <br />
                <br />
                <h1>DELTAGER LISTE<span className="prik">.</span></h1>
                <p>{status}</p>
                {nyeKunder.length > 0 && isPosts ? (
                     <div className="webinar_kasse">
                     {nyeKunder.map((kundeobjekt) => (
                         <Kunder key={kundeobjekt.id} kunde={kundeobjekt} handleButton ={handleButton } />
                     ))}
                 </div>
             ) : (
                 <p>Ingen nye bestillinger at vise</p>
             )}
            </div>
        </section>
    );
}
