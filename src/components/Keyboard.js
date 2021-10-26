import React, { Component } from 'react';
import '../components/keyboard.css'

function Keyboard() {
    return ( <div className="keyContainer">
       <div className="whiteKeys"> 
        <div className="blackKey1"></div>
        <div className="blackKey2"></div>
        <div className="blackKey3"></div>
        <div className="blackKey4"></div>
        <div className="blackKey5"></div> 
        <div className="whiteKey"></div>
        <div className="whiteKey"></div>
        <div className="whiteKey"></div>
        <div className="whiteKey"></div>
        <div className="whiteKey"></div>
        <div className="whiteKey"></div>
        <div className="whiteKey"></div>               
        </div>       
    </div> );
}

export default Keyboard;