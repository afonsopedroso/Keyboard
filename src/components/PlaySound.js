import React, { Component, useState } from 'react';
import Sound from 'react-sound';



const PlaySound = (
    props,
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying,
    
) =>{
   

    return(    
            <Sound
                url={props.sound}
                playStatus={
                    props.isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />  


    );
};
export default PlaySound