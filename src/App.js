import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';
import Pokedex from './Components/Pokedex'
import Footer from './Components/Layout/Footer/Footer'
import Header from './Components/Layout/Header/Header'
import {connect} from 'react-redux'
import { withRouter } from "react-router"
import { compose } from 'redux'
import {Provider} from "react-redux"
import { Redirect } from "react-router-dom"
import {GetPokemonsList, GetActivePokemon, getPokemonTypes, ClearPokemonsList} from './redux/commonReducer'

function App(props) {
  return (
    <div className="App" >
        <Header/>
        <Pokedex {...props}/>
        <Footer
         />
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        PokemonsList: state.commonData.PokemonsList,
        ActivePokemon: state.commonData.ActivePokemon,
        PokemonTypes: state.commonData.PokemonTypes,
        PokemonsCount: state.commonData.PokemonsCount
    }
}


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{GetPokemonsList, GetActivePokemon, getPokemonTypes, ClearPokemonsList}))(App)


export default AppContainer;
