
import Asset from './Asset'
import { assetList } from '../data/data'

const Assets = () => {
  return (
    <div className='w-full h-ful overflow-y-scroll no-scrollbar mt-6'>
        <div className='vertical h-max px-6'>
            {assetList.map((asset , i) => <Asset key={i} asset={asset} />)}
        </div>
    </div>
  )
}

export default Assets