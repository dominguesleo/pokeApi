import axios from "axios";

export const pokemon = async (pokemon) => {
    const data = String(pokemon).toLowerCase();
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`)
    return response.data
}
