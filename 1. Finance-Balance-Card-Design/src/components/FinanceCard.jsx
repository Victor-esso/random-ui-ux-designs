
import { Icon } from "@iconify/react/dist/iconify.js"

const FinanceCard = () => {
  return (
    <div className="finance-card">
        <div className="card">
            <div className="top">
                <div className="w-full horizontal justify-between p-6 font-manrope">
                    <div>
                        <p className="text-[1.65rem] -mb-1 font-medium">$75,589.00</p>
                        <span className="text-[.85rem] font-[200] tracking-wide opacity-45">+2.50% form last month</span>
                    </div>
                    <div className="animate-pulse">
                        <Icon icon="ant-design:thunderbolt-filled" width="40" height="40" className="animate-breath" />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="horizontal justify-between items-start px-6">
                        <div className="">
                            <span className="text-[.85rem] font-[200] tracking-wide opacity-45">Number</span>
                            <p className="text-[.9rem] font-medium">**** 9877</p>
                        </div>

                        <div className="">
                            <span className="text-[.85rem] font-[200] tracking-wide opacity-45">Exp.</span>
                            <p className="text-[.9rem] font-medium horizontal items-center">05<span className="text-[.7rem]">/</span>25</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <button>
                            <Icon icon="lets-icons:add-ring-fill" className="text-2xl icon" />
                            <span>Add Money</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinanceCard