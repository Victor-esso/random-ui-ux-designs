import Assets from "./components/Assets"
import FinanceCard from "./components/FinanceCard"
import HotLinks from "./components/HotLinks"
import Phone from "./components/phone"
import { Icon } from "@iconify/react/dist/iconify.js"

function App() {
  
  return (
    
    <section className="w-full h-full min-h-[100dvh] sm:py-5 flex-center">
      <Phone> 
        <div className="horizontal justify-between px-6">
          <div className="user-block">
            <div className="photo"></div>
            <div className="details">
              <p className="">Hi, Lukmon Olabode</p>
              <span className="">Have a great day!</span>
            </div>
          </div>

          <button className="hamburger-btn">
            <Icon icon="radix-icons:hamburger-menu" width="24" height="24" />
          </button>
        </div>

        <FinanceCard />
        <HotLinks />
        <Assets />

      </Phone>
    </section>
  )
}

export default App
