import React, { useContext, useState, useEffect } from 'react';
import './MyPokemon.css';
import '../PokemonCard/PokemonCardMainTypes.css';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';
import NormalStats from '../NormalStats/NormalStats';
import BattleStats from '../BattleStats/BattleStats';

function MyPokemon() {

    const { name, mainImg, secImg, mainType, hide, erro} = useContext(GetPokemonDataContext);
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    
    return (
        <>
        {
          erro == "Pokemon não encontrado" ? 
            <div className={`myPokemon mainType-normal`} style={{height: "fit-content"}}>Pokemon "{name}" não foi encontrado!</div> : 
            !hide && (
              <div className={`myPokemon mainType-${mainType}`}>
                <p className="myPokemon-title">{name}</p>
                <div className="pokemonStats">
                  <div className="myPokemon-battleStats">
                      <BattleStats />
                      <NormalStats />
                  </div>
                  <div className="myPokemon-img">
                    <img src={mainImg ? mainImg : secImg} alt={name} />
                  </div>
                </div>
              </div>
            )}
        </>
      );
    }
    

export default MyPokemon;