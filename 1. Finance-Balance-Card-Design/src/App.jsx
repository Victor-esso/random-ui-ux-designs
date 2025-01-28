import { useState } from "react"
import Assets from "./components/Assets"
import FinanceCard from "./components/FinanceCard"
import Footer from "./components/Footer"
import HotLinks from "./components/HotLinks"
import Phone from "./components/phone"
import { Icon } from "@iconify/react/dist/iconify.js"

function App() {

    const [scrollDirection, setScrollDirection] = useState(null);
  
  return (
    
    <section className="w-full h-full min-h-[100dvh] sm:py-5 flex-center">
      <Phone> 
        <div className="horizontal justify-between px-6">
          <div className="user-block">
            <div className="photo overflow-hidden">
              <img src="./assets/images/me.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="details">
              <p className="">Hi, Victor Esso</p>
              <span className="">Have a great day!</span>
            </div>
          </div>

          <button className="hamburger-btn">
            <Icon icon="radix-icons:hamburger-menu" width="24" height="24" />
          </button>
        </div>

        <FinanceCard />
        <HotLinks />
        <Assets setScrollDirection={setScrollDirection} scrollDirection={scrollDirection} />
        <Footer scrollDirection={scrollDirection} />

      </Phone>
    </section>
  )
}

export default App
