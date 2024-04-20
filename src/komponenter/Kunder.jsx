export default function Kunder({ kunde, handleButton }) {
    return (
        <div>
            <h2>Webinar {kunde.webinar.join(", ")}</h2>
            <br />
            <div>Virksomhed: {kunde.virksomhed}</div>
            <br />
            <div>Navn: {kunde.navn}</div>
            <br />
            <div>Email: {kunde.email}</div>
            <br />
            <div>Mobilnr: {kunde.mobilnummer}</div>
            <br />
            <br />
            {kunde.status === "Ny kunde" ? 
                <div>
        </div>
        :
        <div>
            <button className="knap" type="button" data-knap="Udført" value={kunde.id} onClick={handleButton}>WEBINAR UDFØRT</button>
        </div>
    }
    </div>
    )
}