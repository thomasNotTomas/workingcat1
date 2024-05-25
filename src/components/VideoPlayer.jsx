import React from "react";

function VideoPlayer() {


    return(

        <div>
            <video

            src="/workingcat.MP4"
            autoPlay
            loop
            controls
            style={{width: '400px', height: 'auto'}}></video>

        </div>
        
    );

};

export default VideoPlayer;