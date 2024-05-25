import React, { useState, useRef } from "react";

function VideoPlayer() {
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        videoRef.current.muted = !isMuted;
    };

    return(

        <div>
            <video
            ref={videoRef}
            src="/workingcat.MP4"
            autoPlay
            loop
            muted={isMuted}
            style={{width: '400px', height: 'auto'}}></video>
            <button onClick={toggleMute}>
                {isMuted ? 'Unmute' : 'Mute'}
            </button>
        </div>
        
    );

};

export default VideoPlayer;