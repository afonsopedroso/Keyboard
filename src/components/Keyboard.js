import React, { Component, useState } from 'react';
import '../components/keyboard.css';
import png from "../components/music.png";
import Sound from 'react-sound';
import PlaySound from './PlaySound';
import dó from "../components/do.mp3";
import re from "../components/re.mp3";
import mi from "../components/mi.mp3";
import fa from "../components/fa.mp3";
import sol from "../components/sol.mp3";
import la from "../components/la.mp3";
import si from "../components/si.mp3";

function Keyboard() {

    
    

    const[music,setMusic]=useState(false);

    function handleClick(e){
        RockOn();
        switch(e.target.id){
            case "btn1":
                console.log(e.target.id);
                <PlaySound sound={dó} isPlaying={music} />;
                
                RockOff();
                break;
            default:
                console.log("default");
                break;
        }        

    }
    function RockOff(){
        setMusic(false);
    }

    function RockOn(){
        
        setMusic(true);
        console.log("click3dS");
        // setTimeout(function(){
        // setMusic(false);
        // },5000);
    }



    return ( <div className="keyContainer">
       <div className="whiteKeys"> 
        <div className="music"><img className="imgs" src={png} alt="beautiful notes"/></div>
        <div className="blackKey1"></div>
        <div className="blackKey2"></div>
        <div className="blackKey3"></div>
        <div className="blackKey4"></div>
        <div className="blackKey5"></div> 
        <button id="btn1" onClick={handleClick} className="whiteKey"></button>
 
                           
        
        <button onClick={handleClick} className="whiteKey"></button>
        {
            music ?<PlaySound sound={re} isPlaying={music} /> : null       
            
        }  
        <button onClick={handleClick} className="whiteKey"></button>
        {
            music ?<PlaySound sound={mi} isPlaying={music} /> : null       
            
        }  
        <button onClick={RockOn} className="whiteKey"></button>
       
        <button onClick={RockOn} className="whiteKey"></button>
        
        <button onClick={RockOn} className="whiteKey"></button>
        
        <button onClick={RockOn} className="whiteKey"></button>
                      
        </div>       
    </div> );
}

export default Keyboard;