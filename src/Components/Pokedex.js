import React, {useEffect, useState} from 'react'
import UpperFirstLetter from '../common/UpperFirstLetter'
import ChosenPokemon from './ChosenPokemon/ChosenPokemon'
import PokemonsList from './PokemonsList/PokemonsList'
import DropDownMenu from './DropDownMenu/DropDownMenu'
import {PreloaderRainbow} from './common/Preloaders/PreloaderRainbow'
import Pagination from './Buttons/Pagination'
import Pikachu from '../assets/preloader_pikachu_running.gif'
import './Pokedex.css'




const Pokedex = (props) => {

    const [Offset, SetOffset] = useState(0)
    const [Page, SetPage] = useState(0)
    const [PokemonsType, SetPokemonsType] = useState(null)
    const [LoadMoreInProgress, SetLoadMoreInProgress] = useState(false)
    const itemsPerPage = 48

    // useEffect(() => {
    //     const handleScroll = () => {
    //         let scrollTopOffset = document.documentElement.scrollTop * 1
    //         if (window.innerHeight + document.documentElement.scrollTop + scrollTopOffset <
    //             document.documentElement.offsetHeight) {
    //             return;
    //           }
    //           if (props.PokemonsList.length < itemsPerPage && props.PokemonsList.length > 0) {
    //             let lastElId = props.PokemonsList[props.PokemonsList.length - 1].id
    //             SetOffset(lastElId)
    //           }
    //       };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    //   },[props.PokemonsList]);

    useEffect(() => {
        if (props.PokemonsList.length < itemsPerPage && props.PokemonsList.length > 0) {
                 let lastElId = props.PokemonsList[props.PokemonsList.length - 1].id
                 SetOffset(lastElId)
              }
    }, [props.PokemonsList])
    
    useEffect( async() => {
        await props.getPokemonTypes()
    },[])

    useEffect( async() => {
        await props.GetPokemonsList(24, Offset, SetLoadMoreInProgress)
    },[Offset])

    useEffect( async() => {
        if (Page) {
            props.ClearPokemonsList()
            SetOffset((Page - 1) * itemsPerPage)
        }
    },[Page])


    if(!props.PokemonsList || props.PokemonsList.length === 0){
        return (
            <>
              <div className={'preloader-big'} >
                <img 
                    className='img-preloader'
                    alt='preloader'
                    src={Pikachu}
                />
               </div>
            </>
        )
    }
    return (
            <>
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
            </div>
            {props.PokemonsList.length > 0 && LoadMoreInProgress && 
                <div className='preloader-more-items' >
                    <img 
                        className='img-preloader'
                        alt='preloader-small'
                        src={Pikachu}
                    />
                </div>
            }
            <Pagination 
            CountItems={props.PokemonsCount.all}
            itemsPerPage={itemsPerPage}
            Page={Page} 
            SetPage={SetPage}/>
            </>
    )
}



export default Pokedex