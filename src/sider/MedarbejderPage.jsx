import { useEffect, useState } from "react";

export default function MedarbejderPage() {


    const [dato, setDato] = useState('');
    const [tid, setTidspunkt] = useState('');
    const [navn, setNavn] = useState('');

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
            </div>
        </section>
    );
}
