import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';
import Pokedex from './Components/Pokedex'
import {connect} from 'react-redux'
import { withRouter } from "react-router"
import { compose } from 'redux'
import {Provider} from "react-redux"
import { Redirect } from "react-router-dom"
import {GetPokemonsList, GetActivePokemon, getPokemonTypes, ClearPokemonsList} from './redux/commonReducer'

function App(props) {
  return (
    <div className="App" >
        <Pokedex {...props}/>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        PokemonsList: state.commonData.PokemonsList,
        ActivePokemon: state.commonData.ActivePokemon,
        PokemonTypes: state.commonData.PokemonTypes
    }
}


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{GetPokemonsList, GetActivePokemon, getPokemonTypes, ClearPokemonsList}))(App)


export default AppContainer;
