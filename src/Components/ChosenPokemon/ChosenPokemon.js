import React, {useEffect, useState} from 'react'
import styles from './ChosenPokemon.module.css'

const ChosenPokemon = (props) => {
    return (
        <div className={styles.ChosenPokemon}>
            <img  src={"https://pokeres.bastionbot.org/images/pokemon/" + props.ActivePokemon.id + ".png"} alt={'21'}/>
            <div className={styles.PokemonName} >
                <span>{props.ActivePokemon.Name + " "}</span>
                <span>{"#" + props.ActivePokemon.id}</span>

            </div>

            {Object.entries(props.ActivePokemon).map(([key, value]) => {
                if(key !== "id"){
                    return (
                        <div className={styles.characterWrapper} key={key}>
                            <div className={styles.Name}>
                                {key}
                            </div>
                            <div className={styles.Value}>
                                {value}
                            </div>
                        </div>
                    )

                }

            })}





        </div>
    )
}

export default ChosenPokemon