
const Summary = ({summary = "summary" ,  value = "value"}) => {

    
  return (
    <div className='horizontal w-full gap-5 items-center'>
        <span className='text-sm opacity-40 shrink-0'>{summary}</span>
        <span className='w-full h-[1px] bg-white/[.1]'></span>
        <span className=' shrink-0text-2xl capitalize px-3 py-1 grid-center rounded-lg'>{value}</span>
    </div>
  )
}

export default Summary