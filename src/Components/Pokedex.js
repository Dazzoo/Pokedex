import React, {useEffect, useState} from 'react'
import UpperFirstLetter from '../common/UpperFirstLetter'
import ChosenPokemon from './ChosenPokemon/ChosenPokemon'
import PokemonsList from './PokemonsList/PokemonsList'
import DropDownMenu from './DropDownMenu/DropDownMenu'
import {PreloaderRainbow} from './common/Preloaders/PreloaderRainbow'
import Pagination from './Buttons/Pagination'
import './Pokedex.css'




const Pokedex = (props) => {

    const [Offset, SetOffset] = useState(0)
    const [Page, SetPage] = useState(0)
    const [PokemonsType, SetPokemonsType] = useState(null)
    const [LoadMoreInProgress, SetLoadMoreInProgress] = useState(false)
    const itemsPerPage = 48

    useEffect(() => {
        const handleScroll = () => {
            let scrollTopOffset = document.documentElement.scrollTop * 0.2
            if (window.innerHeight + document.documentElement.scrollTop + scrollTopOffset <
                document.documentElement.offsetHeight) {
                return;
              }
              if (props.PokemonsList.length < itemsPerPage) {
                SetOffset(props.PokemonsList.length)
              }
          };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      },[props.PokemonsList]);
    
    useEffect( async() => {
        await props.getPokemonTypes()
    },[])

    useEffect( async() => {
        debugger
        await props.GetPokemonsList(24, Offset)
        debugger
        SetLoadMoreInProgress(false)
    },[Offset])

    useEffect( async() => {
        if (Page) {
            props.ClearPokemonsList()
            SetOffset((Page - 1) * itemsPerPage)
        }
    },[Page])

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
             <div onClick={() => SetPage(1) } >
                    1
                </div>
                <div onClick={() => SetPage(2) } >
                    2
                </div>
            <div className={'MainPageWrapper'} >
            {/* {props.PokemonTypes.map((el, index) => (
                    <div key={index} className={''} >{el}</div>
                ))} */}
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
                <Pagination Page={Page} SetPage={SetPage}/>
            </div>



            </>
    )
}



export default Pokedex