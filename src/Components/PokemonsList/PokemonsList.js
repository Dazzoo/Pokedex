import React, {useEffect, useState} from 'react'
import '../Pokedex.css'
import UpperFirstLetter from '../../common/UpperFirstLetter'
import cn from 'classnames'
import PokemonCard from '../../Components/Card/PokemonCard'





const PokemonsList = (props) => {

    return (
            <>
            {props.PokemonsList.map(Pokemon =>
            <div className='PokemonCardWrapper' >
                {console.log(Pokemon)}
            <PokemonCard
                back_img_url={Pokemon.sprites.front_default}
                front_img_url={Pokemon.sprites.other.dream_world.front_default || Pokemon.sprites.other?.["official-artwork"]?.front_default}
                name={Pokemon.name?.charAt(0).toUpperCase() + Pokemon.name?.slice(1)}
                types={Pokemon.types}
                sprites={Pokemon.sprites}
                hp={Pokemon.stats[0].base_stat}
                attack={Pokemon.stats[1].base_stat}
                defense={Pokemon.stats[2].base_stat}
                spAttack={Pokemon.stats[3].base_stat}
                spDefense={Pokemon.stats[4].base_stat}
                speed={Pokemon.stats[5].base_stat}
                key={Pokemon.id}
            />
            </div>
            )}

            </>
    )
}



export default PokemonsList