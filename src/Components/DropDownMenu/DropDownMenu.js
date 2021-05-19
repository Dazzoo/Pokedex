import React from 'react'
import styles from './DropDownMenu.module.css'
import cn from 'classnames'

const DropDownMenu = (props) => {
    return (
        <nav className={styles.one}>
            <ul className={styles.topmenu}>
                <li><a>Type<i className={cn(styles.fa)}></i></a>
                    <ul className={styles.submenu}>
                        <li className={cn(styles.dropDownItem, styles.normal)}  onClick={() => props.SetPokemonsType(null)} >None</li>
                        <li className={cn(styles.dropDownItem, styles.normal)}  onClick={() => props.SetPokemonsType("normal")} >Normal</li>
                        <li className={cn(styles.dropDownItem, styles.fighting)} onClick={() => props.SetPokemonsType("fighting")} >Fighting</li>
                        <li className={cn(styles.dropDownItem, styles.flying)} onClick={() => props.SetPokemonsType("flying")} >Flying</li>
                        <li className={cn(styles.dropDownItem, styles.poison)} onClick={() => props.SetPokemonsType("poison")} >Poison</li>
                        <li className={cn(styles.dropDownItem, styles.ground)} onClick={() => props.SetPokemonsType("ground")} >Ground</li>
                        <li className={cn(styles.dropDownItem, styles.rock)} onClick={() => props.SetPokemonsType("rock")} >Rock</li>
                        <li className={cn(styles.dropDownItem, styles.bug)} onClick={() => props.SetPokemonsType("bug")} >Bug</li>
                        <li className={cn(styles.dropDownItem, styles.ghost)} onClick={() => props.SetPokemonsType("ghost")} >Ghost</li>
                        <li className={cn(styles.dropDownItem, styles.steel)} onClick={() => props.SetPokemonsType("steel")} >Steel</li>
                        <li className={cn(styles.dropDownItem, styles.fire)} onClick={() => props.SetPokemonsType("fire")} >Fire</li>
                            <ul className={styles.submenu2}>
                                <li className={cn(styles.dropDownItem, styles.water)} onClick={() => props.SetPokemonsType("water")} >Water</li>
                                <li className={cn(styles.dropDownItem, styles.grass)} onClick={() => props.SetPokemonsType("grass")} >Grass</li>
                                <li className={cn(styles.dropDownItem, styles.electric)} onClick={() => props.SetPokemonsType("electric")} >Electric</li>
                                <li className={cn(styles.dropDownItem, styles.psychic)} onClick={() => props.SetPokemonsType("psychic")} >Psychic</li>
                                <li className={cn(styles.dropDownItem, styles.ice)} onClick={() => props.SetPokemonsType("ice")} >Ice</li>
                                <li className={cn(styles.dropDownItem, styles.dragon)} onClick={() => props.SetPokemonsType("dragon")} >Dragon</li>
                                <li className={cn(styles.dropDownItem, styles.dark)} onClick={() => props.SetPokemonsType("dark")} >Dark</li>
                                <li className={cn(styles.dropDownItem, styles.fairy)} onClick={() => props.SetPokemonsType("fairy")} >Fairy</li>
                                <li className={cn(styles.dropDownItem, styles.unknown)} onClick={() => props.SetPokemonsType("unknown")} >Unknown</li>
                                <li className={cn(styles.dropDownItem, styles.shadow)} onClick={() => props.SetPokemonsType("shadow")} >Shadow</li>
                            </ul>
                    </ul>

                </li>
            </ul>
        </nav>
    )
}

export default DropDownMenu