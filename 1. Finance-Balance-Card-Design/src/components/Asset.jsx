
import { Icon } from "@iconify/react/dist/iconify.js"
import { formatNumber } from "../functions"

const Asset = ({asset}) => {
  return (
   <>
     <div className="single-asset">
        <div className="left">
            <div className="w-[58px] aspect-square grid-center">
                <Icon icon={asset.icon} className="text-[3rem] " style={{color: asset.iconColor || 'unset'}} />
            </div>
            <div>
                <p className="asset-name">{asset.name}</p>
                <div className="sub-info horizontal gap-3">
                    <span className="opacity-[.6] font-medium">${formatNumber(asset.value)}</span>
                    <span className={`font-medium ${asset.change > 0 ? 'text-emerald-500' : 'text-red-500'} `}>{`${asset.change > 0 ? '+' : ''}${asset.change}%`}</span>
                </div>
            </div>
        </div>
        <div className="right">
            <p className="asset-name">{`${asset.availableCOIN} ${asset.id}`}</p>
            <span className="sub-info opacity-[.6] font-medium">{`$${formatNumber(asset.availableUSD)}`}</span>
        </div>
    </div>
   </>
  )
}

export default Asset