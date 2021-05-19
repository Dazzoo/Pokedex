import { PokedexAPI } from './API'

let initialState = {
    PokemonsList: null,
    ActivePokemon: null
}

const commonReducer = (state = initialState, action) => {
    switch (action.type){
        case 'COMMON/SET-POKEMON-LIST':
            return{...state,
                PokemonsList: action.Pokemons
            }
        case 'COMMON/SET-ACTIVE-POKEMON':
            return{...state,
                ActivePokemon: action.Pokemon
            }
        default:
            return state;
    }
}

PokedexAPI.getPokemonStats(22)

export const SetPokemonsList = (Pokemons) => ({type: 'COMMON/SET-POKEMON-LIST', Pokemons })
export const SetActivePokemon = (Pokemon) => ({type: 'COMMON/SET-ACTIVE-POKEMON', Pokemon })



export const GetPokemonsList = (PokemonsLimit) => async (dispatch) => {
    try {
        let PokemonsArray = await PokedexAPI.getPokemonsList(PokemonsLimit)
        dispatch(SetPokemonsList(PokemonsArray))
    } catch (error) {
        alert(error.message)
        console.log(error.message)

    }
}

export const GetActivePokemon = (id) => async (dispatch) => {
    try {
        let PokemonStats = await PokedexAPI.getPokemonStats(id)
        dispatch(SetActivePokemon(PokemonStats))
        console.log(PokemonStats)

    } catch (error) {
        alert(error.message)
        console.log(error.message)

    }
}

export const handlerActivePokemon = () => {

}



export default commonReducer