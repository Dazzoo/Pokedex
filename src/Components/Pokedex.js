import React, {useEffect, useState} from 'react'
import UpperFirstLetter from '../common/UpperFirstLetter'
import ChosenPokemon from './ChosenPokemon/ChosenPokemon'
import PokemonsList from './PokemonsList/PokemonsList'
import DropDownMenu from './DropDownMenu/DropDownMenu'
import {PreloaderRainbow} from './common/Preloaders/PreloaderRainbow'
import './Pokedex.css'




const Pokedex = (props) => {

    const [Offset, SetOffset] = useState(0)
    const [PokemonsType, SetPokemonsType] = useState(null)
    const [LoadMoreInProgress, SetLoadMoreInProgress] = useState(false)

    useEffect( async() => {
        await props.GetPokemonsList(24, Offset)
        SetLoadMoreInProgress(false)
    },[Offset])

    const LoadMoreOnClick = (e) => {
        e.preventDefault()
        SetOffset((prevState) =>  {return prevState + 12})
        SetLoadMoreInProgress(true)

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
            <div className={'MainPageWrapper'} >
{/* 
                {props.ActivePokemon ?
                    <div className={styles.ChosenPokemonWrapper}>
                        <ChosenPokemon {...props} UpperFirstLetter={UpperFirstLetter} />
                    </div>
                    : null
                } */}
                {/* <DropDownMenu SetPokemonsType={SetPokemonsType} /> */}
            <PokemonsList {...props}  PokemonsType={PokemonsType} />
                {/* {LoadMoreInProgress ?
                    <div  className={styles.LoadMore} >
                    <PreloaderRainbow/>
                    </div>
                    :
                    <div  className={styles.LoadMore} >
                        <button onClick={(e) => LoadMoreOnClick(e)} >Load More</button>
                    </div>
                } */}
            </div>



            </>
    )
}



export default Pokedex