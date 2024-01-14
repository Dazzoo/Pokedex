import { PokedexAPI } from './API'

let initialState = {
    PokemonsList: [],
    ActivePokemon: null,
    PokemonTypes: [],
    PokemonsCount: {
        all: 0
    }
}

const commonReducer = (state = initialState, action) => {
    switch (action.type){
        case 'COMMON/SET-POKEMON-LIST':
            return{...state,
                PokemonsList: [...state.PokemonsList, ...action.Pokemons]
            }
        case 'COMMON/CLEAR-POKEMON-LIST':
            return{...state,
                PokemonsList: []
            }
        case 'COMMON/SET-ACTIVE-POKEMON':
            return{...state,
                ActivePokemon: action.Pokemon
            }
        case 'COMMON/SET-POKEMON-TYPES':
            return{...state,
                PokemonTypes: action.Types
            }
            case 'COMMON/SET-POKEMON-COUNT-ALL':
                return{...state,
                    PokemonsCount: {
                        all: action.count
                    }
                }
        default:
            return state;
    }
}


export const SetPokemonsList = (Pokemons) => ({type: 'COMMON/SET-POKEMON-LIST', Pokemons })
export const ClearPokemonsList = () => ({type: 'COMMON/CLEAR-POKEMON-LIST' })
export const SetActivePokemon = (Pokemon) => ({type: 'COMMON/SET-ACTIVE-POKEMON', Pokemon })
export const SetPokemonTypes = (Types) => ({type: 'COMMON/SET-POKEMON-TYPES', Types })
export const SetAllPokemonsCount = (count) => ({type: 'COMMON/SET-POKEMON-COUNT-ALL', count })


export const GetPokemonsList = (PokemonsLimit, Offset, SetLoadMoreInProgress) => async (dispatch) => {
    try {
        SetLoadMoreInProgress(true)
        const Pokemons = await PokedexAPI.getPokemonsList(PokemonsLimit, Offset)
        dispatch(SetAllPokemonsCount(Pokemons.all_count))
        dispatch(SetPokemonsList(Pokemons.PokemonsList))
        SetLoadMoreInProgress(false)
    } catch (error) {
        alert(error.message)
        console.log(error.message)

    }
}

export const GetActivePokemon = (id) => async (dispatch) => {
    try {
        const PokemonStats = await PokedexAPI.getPokemonStats(id)
        dispatch(SetActivePokemon(PokemonStats))

    } catch (error) {
        alert(error.message)
        console.log(error.message)

    }
}

export const getPokemonTypes = () => async (dispatch) => {
    try {
        const colors = {
            normal: '#B8B77A',
            fighting: '#D23228',
            flying: '#B98FF3',
            poison: '#B33EA1',
            ground: '#F2CF65',
            rock: '#C6B136',
            bug: '#B6C91A',
            ghost: '#835797',
            steel: '#C7C7CE',
            fire: '#FE9130',
            water: '#7390F0',
            grass: '#8CC74C',
            electric: '#F7E02C',
            psychic: '#FC6587',
            ice: '#A6E9E6',
            dragon: '#7F45FC',
            dark: '#805946',
            fairy: '#E695BD',
            unknown: '#202020',
            shadow: '#202020'
         };
        
        const PokemonTypes = await PokedexAPI.getPokemonTypes()
        let types = PokemonTypes.data.results

        types = types = types.map(type => ({
            ...type,
            color: colors[type.name] || '#000000' // Fallback to black if the color is not defined
        }));

        dispatch(SetPokemonTypes(types))
    } catch (error) {
        alert(error.message)
        console.log(error.message)

    }
}

export const handlerActivePokemon = () => {

}



export default commonReducer