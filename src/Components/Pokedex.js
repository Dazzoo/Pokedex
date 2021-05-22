import React, {useEffect, useState} from 'react'
import styles from './Pokedex.module.css'
import UpperFirstLetter from '../common/UpperFirstLetter'
import ChosenPokemon from './ChosenPokemon/ChosenPokemon'
import PokemonsList from './PokemonsList/PokemonsList'
import DropDownMenu from './DropDownMenu/DropDownMenu'
import {PreloaderRainbow} from './common/Preloaders/PreloaderRainbow'
import cn from 'classnames'





const Pokedex = (props) => {

    const [PokemonsLimit, SetPokemonsLimit] = useState(12)
    const [PokemonsType, SetPokemonsType] = useState(null)
    const [LoadMoreinProgress, SetLoadMoreinProgress] = useState(false)

    useEffect( async() => {
        await props.GetPokemonsList(PokemonsLimit)
        SetLoadMoreinProgress(false)
    },[PokemonsLimit])

    const LoadMoreOnClick = (e) => {
        e.preventDefault()
        SetPokemonsLimit((prevState) => {return prevState + 12})
        SetLoadMoreinProgress(true)

    }



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
                {LoadMoreinProgress ?
                    <div  className={styles.LoadMore} >
                    <PreloaderRainbow/>
                    </div>
                    :
                    <div  className={styles.LoadMore} >
                        <button onClick={(e) => LoadMoreOnClick(e)} >Load More</button>
                    </div>
                }
            </div>



            </>
    )
}



export default Pokedex