import React, {useEffect, useState} from 'react'
import '../Pokedex.css'
import UpperFirstLetter from '../../common/UpperFirstLetter'
import cn from 'classnames'
import PokemonCard from '../../Components/Card/PokemonCard'





const PokemonsList = (props) => {
    console.log(props.PokemonsList)

    return (
            <>
            {props.PokemonsList.map(Pokemon =>
            <div className='PokemonCardWrapper' >
            <PokemonCard
                cover_img_url={Pokemon.sprites.front_default}
                name={Pokemon.name?.charAt(0).toUpperCase() + Pokemon.name?.slice(1)}
            />
            </div>
            )}

            </>
    )
}



export default PokemonsList