import * as axios from 'axios'
import UpperFirstLetter from '../common/UpperFirstLetter'

const instance = axios.create({
    withCredentials: false
})



export const PokedexAPI = {
    async getPokemonsList(PokemonsLimit = 12, Offset = 0){
        let results = await instance.get(`https://pokeapi.co/api/v2/pokemon/?limit=` + PokemonsLimit + "&offset=" + Offset)
        let PokemonsUrl = await results.data.results.map(result => result.url)
        let Pokemons = []
        for (let i = 0; i < PokemonsUrl.length; i++){
            await instance.get(PokemonsUrl[i]).then(
                response =>
                    Pokemons.push(response.data))
        }
        return Pokemons
    },
    async getPokemonStats(id){
        let results = await instance.get(`https://pokeapi.co/api/v2/pokemon/` + id)
        let PokemonName = UpperFirstLetter(results.data.name)
        let PokemonTypes = []
        results.data.types.map(type => PokemonTypes.push("\u00A0" + type.type.name))
        let PokemonStats = {}
        let PokemonTotalMoves = results.data.moves.length
        let PokemonHP = results.data.stats[0].base_stat
        let PokemonAttack = results.data.stats[1].base_stat
        let PokemonDefense = results.data.stats[2].base_stat
        let PokemonSPAttack = results.data.stats[3].base_stat
        let PokemonSPDefense = results.data.stats[4].base_stat
        let PokemonSpeed = results.data.stats[5].base_stat
        let PokemonWeight = results.data.weight
        let PokemonId = results.data.id
        Object.assign(PokemonStats, {Name: PokemonName, Types: PokemonTypes,TotalMoves: PokemonTotalMoves,HP: PokemonHP,
                        Attack: PokemonAttack, Defense: PokemonDefense, SPAttack: PokemonSPAttack, SPDefense: PokemonSPDefense,
                        Speed: PokemonSpeed, Weight: PokemonWeight, id: PokemonId})
        return PokemonStats
    }

}
