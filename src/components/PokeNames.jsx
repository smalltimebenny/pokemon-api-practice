import React, {useEffect, useState} from 'react';

const PokeNames = () => {
    const [moniker, setMoniker] = useState("")

    useEffect (() => {
        console.log("Names componenent loaded.")
        fetch ("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {return response.json()})
            .then(response => {setMoniker({name: response.results})})
    }, []);

    return (
        <>
            {moniker.name ? moniker.name.map((item, index) =>{
                return(<div key={index}>{item.name}</div>)
            }):null}
        </>
    )
}

export default PokeNames;