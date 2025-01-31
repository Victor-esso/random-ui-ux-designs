
import CustomDropdown from './CustomDropdown ';
import logo from '/assets/images/logo.svg'
import { Icon } from "@iconify/react";
const SongList = ({showTitle = true ,  setShowTitle , songs , initialSongs , playedSongs , playSong , resetPlayedSongs , setSearch , search , reset , setReset , shuffleUnplayedSongs }) => {
    
    let options = songs.map((song , i) => {
        return {
            value: song.id,
            text : `Number ${i + 1}`
        }
    }).filter((song , id) => playedSongs.includes(song.value))
    
    options = [{value:"*" , text: "All"}, ...options]




  return (
    <div className="w-full h-full min-h-[100dvh] bg-[#101010] horizontal items-stretch text-white">
        <div className="w-[400px] bg-black/30 shrink-0 p-5 vertical justify-center">
            <img src={logo} alt="" className='animate-breath' />
            <div className='vertical w-full px-9'>
                <div className='horizontal  w-full justify-between items-center'>
                    <span className='text-sm opacity-40'>Show Songs Title</span>
                    <span className='w-[60px] h-[1px] bg-white/[.1]'></span>
                    <button onClick={() => setShowTitle(!showTitle)} className='text-2xl capitalize bg-white/[.01] hover:bg-white/[.06] active:scale-[1] hover:scale-[1.1] px-3 py-1 grid-center rounded-lg'>{showTitle ? 'on' : 'of'}</button>
                </div>
            </div>
            {!showTitle && 
                <>
                    <div className='horizontal w-max fixed top-5 left-5 gap-2'>
                        <button >Reset</button>
                        <CustomDropdown 
                            options={options}
                            placeholder="Choose an option"
                            onChange={(value) => setReset(value)}
                            initSelected={reset}
                            
                        />
                        <button onClick={() => resetPlayedSongs()} className='opacity-40 hover:opacity-100 hover:scale-[1.2] active:scale-[.9] transition-all '>
                        <Icon icon="solar:square-arrow-right-bold" className='text-[2.5rem]' />
                        </button>
                    </div>
        
                    <button onClick={() => shuffleUnplayedSongs()} className='fixed bottom-5 left-5 horizontal items-center gap-2 hover:scale-[1.2] active:scale-[.9] transition-all bg-white/[.03] px-3 py-1 rounded-lg'>
                        <Icon icon="solar:refresh-linear" width="24" height="24" />
                        <span>Shuffle</span>
                    </button>
                </>
            }
        </div>
        {showTitle ? 
            <div className='w-full h-100dvh no-scrollbar vertical items-center'>
                <div className='w-full py-6  shrink-0 vertical items-center gap-2'>
                    <input
                        type="text"
                        placeholder="Search songs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full max-w-[400px] bg-black/[.2] px-3 py-2 rounded-lg text-white/[.2] focus:text-white transition-all focus:border-white/[.09] border border-solid border-white/[.05] focus:outline-none" 
                    />
                    <span className='capitalize text-sm text-[#ffffff70] [&>span]:!text-white'>
                    {songs.length !== initialSongs.length ? (
                        <>
                            Showing <span>{songs.length}</span> Out Of <span>{initialSongs.length} Songs</span> 
                        </>
                        ) : (
                        <>
                            Showing a total of <span>{initialSongs.length} Songs</span> 
                        </>
                        )
                    }

                    </span>
                </div>
                <div className='h-full w-full overflow-y-scroll flex justify-center pt-6'>
                    <div className='vertical h-max gap-0 w-full min-w-[400px] max-w-[800px] pb-28'>
                        {
                            songs.map((song , i) => 
                            <button onClick={() => {playSong(song.id)}} className='song-info' key={i}>
                                    <span>{song.name}</span>
                                    <span>{song.by}</span>
                            </button>
                        )
                        }
                    </div>
                </div> 
            </div>
            : 
            <div className="num-container">
                {
                    songs.map((song , i) =>   <button onClick={() => {playSong(song.id)}} key={i} className={`num-btn ${playedSongs.includes(song.id) ? 'disabled' : ''}`}>
                        <span>{i + 1}</span>
                    </button>)
                }

            </div>
        }
    </div>
  )
}

export default SongList