//Nina

export default function Webinar ({webinar, handleInput}) {

    return (
        <p>
            {webinar.dato}.{webinar.tidspunkt}{webinar.navn}
            <input type="checkbox" name={webinar.navn}
            value={webinar.navn} onChange={handleInput} />
        </p>
    )
}