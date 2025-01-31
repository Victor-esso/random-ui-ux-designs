
import CustomDropdown from './CustomDropdown ';
import Summary from './Summary';
import logo from '/assets/images/logo.svg'
import { Icon } from "@iconify/react";
const SongList = ({showTitle = true ,  setShowTitle , songs , initialSongs , playedSongs , playSong , resetPlayedSongs , setSearch , search , reset , setReset , shuffleUnplayedSongs }) => {
    
    let options = songs.map((song , i) => {
        return {
            value: song.id,
            text : `Number ${i + 1}`
        }
    }).filter((song , id) => playedSongs.includes(song.value))
    
    options = [{value:"*" , text:"All Songs"}, ...options]




  return (
    <div className="w-full h-full min-h-[100dvh] overflow-hidden bg-[#101010] horizontal items-stretch text-white">
        <div className="w-[400px] bg-black/30 shrink-0 p-5 vertical">
            <img src={logo} alt="" className='animate-breath' />
            <div className='vertical w-full gap-6 px-9'>
                
                <div className='horizontal *:h-[32px] *:aspect-square items-center border border-solid border-white/[.03] *:grid-center overflow-hidden rounded-lg hover:scale-[1.1] transition-all fixed top-4 left-4 z-[10]'>
                    <button onClick={() => setShowTitle(false)} className={`${!showTitle ? 'bg-white/[.04]' : 'opacity-15'}`}><Icon icon="ic:round-numbers" width="24" height="24" /></button>
                    <button onClick={() => setShowTitle(true)} className={`${showTitle ? 'bg-white/[.04]' : 'opacity-15'}`}><Icon icon="solar:plaaylist-minimalistic-linear" width="24" height="24" /></button>
                </div>

                {
                    !showTitle ? 
                    <div className='w-full vertical items-center gap-8'>
                        <h1 className='mb-4 horizontal gap-3'>
                            <span className='text-3xl font-bold shrink-0'>Random</span>
                            <span className='shrink-0 capitalize opacity-45 font-light'>- mode</span>
                        </h1>
                        <div className='w-full vertical gap-2'>
                            <Summary summary="Total Songs" value={initialSongs.length} />
                            <Summary summary='Played songs' value={playedSongs.length} />
                            <Summary summary='Available Songs' value={initialSongs.length - playedSongs.length } />
                        </div>
                        <div className='w-full vertical gap-6'>
                            <span className='text-sm capitalize opacity-30 font-light'>settings</span>
                            <div className='pl-2 w-full vertical gap-3'>
                                <div className='horizontal w-max gap-5'>
                                    <CustomDropdown 
                                        options={options}
                                        placeholder="Choose an option"
                                        onChange={(value) => setReset(value)}
                                        initSelected={reset}
                                        
                                    />
                                    <button onClick={() => resetPlayedSongs()} className=' hover:scale-[1.1] active:scale-[.9] transition-all horizontal gap-1 items-center text-black bg-white h-[32px] px-3 pr-2 rounded-lg '>
                                        <span className=''>Reset</span>
                                        <Icon icon="solar:refresh-linear" className=' text-[1.6rem]' />
                                    </button>
                                </div>
                                <button onClick={() => shuffleUnplayedSongs()} className=' horizontal items-center gap-2 hover:scale-[1.05] active:scale-[.9] transition-all bg-white/[.03] hover:bg-white/[.06] px-3 py-1 rounded-lg'>
                                    <Icon icon="solar:shuffle-outline" width="24" height="24" />
                                    <span>Shuffle</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='w-full vertical items-center gap-6'>
                        <h1 className='mb-4 horizontal gap-3'>
                            <span className='text-3xl font-bold shrink-0'>Playlist</span>
                            <span className='shrink-0 capitalize opacity-45 font-light'>- mode</span>
                        </h1>
                        <div className='w-full vertical gap-2'>
                            <Summary summary="Total Songs" value={initialSongs.length} />
                            {
                                (songs.length !== initialSongs.length) &&
                                <Summary summary='Showing' value={songs.length} />
                            }
                        </div>
                    </div>
                }
                
            </div>
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