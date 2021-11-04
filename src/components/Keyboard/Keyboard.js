import React, { useState } from 'react';
import '../../components/Keyboard/keyboard.css';
import dó from "../../assets/sounds/do.mp3";
import re from "../../assets/sounds/re.mp3";
import mi from "../../assets/sounds/mi.mp3";
import fa from "../../assets/sounds/fa.mp3";
import sol from "../../assets/sounds/sol.mp3";
import la from "../../assets/sounds/la.mp3";
import si from "../../assets/sounds/si.mp3";
import png from "../../assets/images/music.png";

function Keyboard() {

    
    

    const[music,setMusic]=useState(false);

    function handleClick(e){
        RockOn();
        switch(e.target.id){
            case "btn1":
                console.log(e.target.id);
                const audio1 = new Audio(dó);
                audio1.play();
                               
                RockOff();
                break;
            case "btn2":
                console.log(e.target.id);
                const audio2 = new Audio(re);
                audio2.play();
                               
                RockOff();
                break;    
            case "btn3":
                console.log(e.target.id);
                const audio3 = new Audio(mi);
                audio3.play();
                               
                RockOff();
                break;
            case "btn4":
                console.log(e.target.id);
                const audio4 = new Audio(fa);
                audio4.play();
                               
                RockOff();
                break;
            case "btn5":
                console.log(e.target.id);
                const audio5 = new Audio(sol);
                audio5.play();
                               
                RockOff();
                break;
            case "btn6":
                console.log(e.target.id);
                const audio6 = new Audio(la);
                audio6.play();
                               
                RockOff();
                break;
            case "btn7":
                console.log(e.target.id);
                const audio7 = new Audio(si);
                audio7.play();
                               
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
        <button id="btn2" onClick={handleClick} className="whiteKey"></button>
        <button  id="btn3" onClick={handleClick} className="whiteKey"></button>
        <button  id="btn4" onClick={handleClick} className="whiteKey"></button>
        <button  id="btn5" onClick={handleClick} className="whiteKey"></button>
        <button id="btn6" onClick={handleClick} className="whiteKey"></button>
        <button  id="btn7" onClick={handleClick} className="whiteKey"></button>

        </div>       
    </div> );
}

export default Keyboard;