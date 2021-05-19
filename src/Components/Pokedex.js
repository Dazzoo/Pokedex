import React, {useEffect, useState} from 'react'
import styles from './Pokedex.module.css'
import UpperFirstLetter from '../common/UpperFirstLetter'
import ChosenPokemon from './ChosenPokemon/ChosenPokemon'
import PokemonsList from './PokemonsList/PokemonsList'
import DropDownMenu from './DropDownMenu/DropDownMenu'
import cn from 'classnames'





const Pokedex = (props) => {

    const [PokemonsLimit, SetPokemonsLimit] = useState(36)
    const [PokemonsType, SetPokemonsType] = useState(null)

    useEffect(() => {
        props.GetPokemonsList(PokemonsLimit)
    },[PokemonsLimit])



    if(!props.PokemonsList){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
            <>
                <div className={styles.PokedexName}>Pokedex</div>
            <div className={styles.PokedexWrapper} >
                {props.ActivePokemon ?
                    <div className={styles.ChosenPokemonWrapper}>
                        <ChosenPokemon {...props} UpperFirstLetter={UpperFirstLetter} />
                    </div>
                    : null
                }
                <DropDownMenu SetPokemonsType={SetPokemonsType} />
            <PokemonsList {...props} PokemonsLimit={PokemonsLimit} PokemonsType={PokemonsType} />

            <div  className={styles.LoadMore} >
                <button  onClick={(e) =>{e.preventDefault();SetPokemonsLimit((prevState) => {return prevState + 12})}} >Load More</button>
            </div>
            </div>



            </>
    )
}



export default Pokedex