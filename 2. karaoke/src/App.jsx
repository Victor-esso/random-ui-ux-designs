import { useState, useEffect } from "react";
import SongList from "./components/SongList";
import YouTubePlayer from "./components/YouTubePlayer";
import initialSongs from "./data/data";
import func from './functions'
import logo from '/assets/images/logo.svg'
import FullscreenButton from "./components/FullscreenButton";

function App() {
  const [songs, setSongs] = useState(initialSongs);
  const [showTitle, setShowTitle] = useState((localStorage.getItem("showTitle") && localStorage.getItem("showTitle") === '1') ? true : false);
  const [song, setSong] = useState('');
  const [playedSongs, setPlayedSongs] = useState([]);
  const [search , setSearch] = useState('');
  const [reset , setReset] = useState({text:"All" , value: "*"})
  const [shuffledSongs, setShuffledSongs] = useState([]); // Array of shuffled unplayed songs
  const [screenLoading , setScreenLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState( window.innerHeight == screen.height);

  useEffect(() => {
    const savedPlayedSongs = JSON.parse(localStorage.getItem("playedSongs")) || [];
    setPlayedSongs(savedPlayedSongs);

    const savedShuffledSongs = localStorage.getItem("shuffledSongs");
    if (savedShuffledSongs && savedShuffledSongs !== '[]' && JSON.parse(savedShuffledSongs).length === initialSongs.length) {
        setShuffledSongs(JSON.parse(savedShuffledSongs));
    }else{
      shuffleUnplayedSongs(initialSongs);
    }

    if(screenLoading && isFullscreen){
      setTimeout(() => {
        setScreenLoading(false);
      },func.getRandomInteger(1500 , 5000))
    }


  }, []);

  const playSong = (id) => {
    if (!showTitle) {
      if (playedSongs.includes(id)) {
        return;
      }
      
      const updatedPlayedSongs = [...playedSongs, id];
      setPlayedSongs(updatedPlayedSongs);

      // Save to localStorage
      localStorage.setItem("playedSongs", JSON.stringify(updatedPlayedSongs));
    }
    setSong(id);
  };

  const resetPlayedSongs = () => {
    if(reset.value == "*"){
      setPlayedSongs([]);
      localStorage.removeItem("playedSongs");
      return;
    }

    if(playedSongs.includes(reset.value)){
      let updatedPlayedSongs = playedSongs.filter((id) => id !== reset.value)
      setPlayedSongs(updatedPlayedSongs);
      localStorage.setItem("playedSongs", JSON.stringify(updatedPlayedSongs));
    }
  };


  const shuffleUnplayedSongs = (theSongs = false) => {
    let songIn = !theSongs ? shuffledSongs : theSongs;
    // Filter out songs that have been played
    const unplayedSongs = songIn.filter(song => !playedSongs.includes(song.id));

    // Shuffle the unplayed songs
    const shuffled = [...unplayedSongs];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }

    // Rebuild the songs array, keeping played songs in their place
    const updatedSongs = songIn.map(song => {
        if (playedSongs.includes(song.id)) {
            return song;
        } else {
            return shuffled.pop(); // Replace with shuffled unplayed song
        }
    });

    setShuffledSongs(updatedSongs); // Update state with shuffled songs
    // Save shuffled songs to localStorage
    localStorage.setItem("shuffledSongs", JSON.stringify(updatedSongs));
    
      let resetGet = reset.value == "*" ? reset :  updatedSongs.map((song,i) => { return {text: `Number ${i + 1}` , value : song.id}}).find((song, i) => reset.text === `Number ${i+1}`);
      setReset(resetGet);
  };

  // 🔍 Filter songs based on search input
  const filteredSongs = !showTitle ? shuffledSongs :  songs.filter(song =>
    func.deepSearch(song.name.concat(" ",song.by),search)
  );

  const setGlobalShowTitle = (value) => {
    setShowTitle(value);
    localStorage.setItem('showTitle',(value ? '1' : '0'))
  }

  return (
    <>
      <SongList 
        showTitle={showTitle} 
        setShowTitle={setGlobalShowTitle} 
        songs={filteredSongs} 
        initialSongs={initialSongs}
        playedSongs={playedSongs} 
        playSong={playSong} 
        reset={reset} 
        setReset={setReset} 
        resetPlayedSongs={resetPlayedSongs} 
        search={search} 
        setSearch={setSearch}
        shuffleUnplayedSongs={shuffleUnplayedSongs}  
      />
      {song && <YouTubePlayer videoId={song} setSong={setSong} />}
      {screenLoading && 
         <div className="bg-black grid-center w-full h-100dvh fixed inset-0">
          <div className="relative">
               <img src={logo} alt="" className="h-[750px] animate-breath" />
               <div className="absolute w-max h-max bottom-0 abs-center-x ">
                {!isFullscreen && 
                  <FullscreenButton isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} onFullScreen={() => setScreenLoading(false)}> 
                    <span className="px-6 py-3 text-3xl font-bangers bg-blue-500 text-white rounded-xl bg-gradient-to-b from-pink-900 to-pink-500 z-[9999]">{localStorage.getItem("shuffledSongs") ? 'Continue' : 'Start'}</span>  
                  </FullscreenButton>
                }
               </div>
          </div>
        </div>
      }
    </>
  );
}

export default App;
