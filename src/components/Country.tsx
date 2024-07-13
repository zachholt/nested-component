type CountryProps = {
    country : string
}


export default function Country({country} : CountryProps) {
    return (
        <img src={`https://flagsapi.com/${country}/flat/64.png`} alt={`${country} flag`}/>
    );
}    