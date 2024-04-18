export default function Tilmeldinger ({ tilmelding, handleButton }) {
    return (
        <div style={{ display: "flex", width: "1200px", justefyContent: "space-between" }}>
            <div>Virkosmhed: {tilmelding.virksomhed}</div>
            <div>Navn: {tilmelding.navn}</div>
            <div>Email: {tilmelding.email}</div>
            <div>Mobilnr: {tilmelding.mobilnummer}</div>
            <div>Antal deltagere: {tilmelding.deltagere.join(", ")}</div>
            
    </div>
    )
}