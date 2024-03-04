import { useQuery } from "@tanstack/react-query"
import { pokemon } from "../services/pokeapi"


export const useGetPokemon = (value) => {

    return useQuery({
        queryKey: ['pokemon', value],
        queryFn : () => pokemon(value),
    })
}