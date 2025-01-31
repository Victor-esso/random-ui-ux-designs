import { useRef, useState } from "react";
import YouTube from "react-youtube";
import { Icon } from "@iconify/react";

import logo from '/assets/images/logo.svg'

const YouTubePlayer = ({ videoId , setSong}) => {
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);
  
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1, // Auto-play the video
        controls: 0, // Hide controls
        modestbranding: 1, // Remove YouTube branding
        rel: 0, // Prevent related videos from showing at the end
        fs: 1, // Enable fullscreen
      },
    };
  
    const onReady = (event) => {
      playerRef.current = event.target;
      setLoading(false);
      setIsPlaying(true);
    };
  
    const onStateChange = (event) => {
      if (event.data === 1) {
        setIsPlaying(true); // Playing
      } else if (event.data === 2) {
        setIsPlaying(false); // Paused
      }
    };
  
    const togglePlayPause = () => {
      if (playerRef.current) {
        if (isPlaying) {
          playerRef.current.pauseVideo();
        } else {
          playerRef.current.playVideo();
        }
      }
    };

  return (
    <div>
        <div className="youtube-container stack fixed inset-0 z-50">
            <YouTube videoId={videoId} opts={opts} onReady={onReady} onStateChange={onStateChange} onEnd={() => setSong(false)} />
            <div onClick={togglePlayPause} className={`${isPlaying ? 'bg-white/0' : 'bg-black/[.6]'} grid-center `}>
                {(!isPlaying && !loading) && <Icon icon="solar:pause-bold" className="text-white text-[6rem] animate-breath" />}
            </div>
            {loading && 
              <div className="bg-black/[.6] grid-center ">
                <img src={logo} alt="" className="h-[750px] animate-breath" />
              </div>
            }
        </div>
        <button onClick={() => setSong(false)} className="fixed z-[100000000000] top-16 left-16 bg-gradient-to-t from-pink-900 to-pink-400 text-white text-3xl font-bangers px-5 py-2 rounded-2xl animate-backward hover:animate-none">Back</button>
    </div>
  );
};

export default YouTubePlayer;
