import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import {connect} from 'react-redux'
import styled from 'styled-components';
import './PokemonCard.css'

const PokemonCard = ({back_img_url, front_img_url, name, PokemonTypes, types, sprites, 
    hp, attack, defense, speed, spAttack, spDefense}) => {
    const [color, setColor] = useState('#ff9966');



    useEffect(() => {
        const currentColor = PokemonTypes.find(t => t.name === types[0]?.type.name)?.color
        setColor(currentColor)
    }, [types])

    const PokemonColorBack = styled.div`
        &::before {
            background: linear-gradient(
            90deg,
            transparent,
            ${color},
            ${color},
            ${color},
            ${color},
            transparent
            );
        }
        `;

    return (
        <>
            <div className="card">
            <div className="content">
                <PokemonColorBack  className={`back`}>
                <div className="back-content">
                <img className="img" src={back_img_url}/>
                    <strong>{name}</strong>
                </div>
                </PokemonColorBack >
                <div className="front">
                
                <div className="img">
                    <div className='front-img' style={{backgroundColor: `${color}`}} >
                        <img className="img" src={front_img_url}/>
                    </div>
                </div>

                <div className="front-content">
                    <small className="badge">{name}</small>
                    <div className="description">
                        <div >
                        <strong style={{ color: '#FFC0CB' }} >HP:</strong> {hp}
                        </div>
                        <div>
                        <strong style={{ color: '#00BFFF' }} >Attack:</strong> {attack}
                        </div>
                        <div>
                        <strong style={{ color: '#90EE90' }} >Defense:</strong> {defense}
                        </div>
                        <div>
                        <strong style={{ color: '#FFFF99' }} >Speed:</strong> {speed}
                        </div>
                        <div>
                        <strong style={{ color: '#F4A460' }} >Special Attack:</strong> {spAttack}
                        </div>
                        <div>
                        <strong style={{ color: '#EE82EE' }} >Special Defense:</strong> {spDefense}
                        </div>
                    {/* <div className="title">
                        <p className="title">
                        <strong>Spaguetti Bolognese</strong>
                        </p>
                        <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" 
                        xlinkHref="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g 
                        style={{mixBlendMode: 'normal'}} text-anchor="none" font-size="none" 
                        font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" 
                        stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" 
                        stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path 
                        d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                    </div>
                    <p className="card-footer">
                        30 Mins &nbsp; | &nbsp; 1 Serving
                    </p>     */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        PokemonTypes: state.commonData.PokemonTypes
    }
}


const PokemonCardWrapper = compose(
    connect(mapStateToProps,{}))(PokemonCard)


export default PokemonCardWrapper