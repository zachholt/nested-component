import Country from "./Country";

type PersonProps = {
    name: string
    age: number
    country: string
}

export default function Person({name, age, country} : PersonProps) {

    return (
        <h3>{name}, {age}, <Country country={country}/></h3>
    );
}    