import React, {useEffect, useState} from 'react'
import styles from '../Pokedex.module.css'
import UpperFirstLetter from '../../common/UpperFirstLetter'
import cn from 'classnames'





const PokemonsList = (props) => {
    console.log(props)

    return (
            <>
            {props.PokemonsList.map(Pokemon =>
                    props.PokemonsType !== null && Pokemon.types[0].type.name == props.PokemonsType   ?
            <div className={cn(styles.PokemonCard, Pokemon.types[0].type.name)} onClick={() => props.GetActivePokemon(Pokemon.id) } key={Pokemon.id} >
                <div>
                    <img alt="Pokedex" className={styles.PokemonImg} src={"https://pokeres.bastionbot.org/images/pokemon/" + Pokemon.id + ".png" }/>
                </div>
            <div className={styles.PokemonName} >
                {UpperFirstLetter(Pokemon.name)}
            </div>
                <div className={styles.typesWrapper}>
                    {Pokemon.types.map(type =>  <div className={cn(type.type.name, styles.types)} >{UpperFirstLetter(type.type.name)}</div>)}
                </div>
            </div>
                    :
                        props.PokemonsType == null ?

                        <div className={cn(styles.PokemonCard, Pokemon.types[0].type.name)} onClick={() => props.GetActivePokemon(Pokemon.id) } key={Pokemon.id} >
                            <div>
                                <img className={styles.PokemonImg} src={"https://pokeres.bastionbot.org/images/pokemon/" + Pokemon.id + ".png" }/>
                            </div>
                            <div className={styles.PokemonName} >
                                {UpperFirstLetter(Pokemon.name)}
                            </div>
                            <div className={styles.typesWrapper}>
                                {Pokemon.types.map(type =>  <div className={cn(type.type.name, styles.types)} >{UpperFirstLetter(type.type.name)}</div>)}
                            </div>
                        </div> : null

            )}

            </>
    )
}



export default PokemonsList