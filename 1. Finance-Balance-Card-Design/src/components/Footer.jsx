
import { Icon } from "@iconify/react/dist/iconify.js"
const Footer = () => {
  return (
    <footer>
        <button className="nav-link active">
            <div className="stack icon">
                <Icon icon="solar:home-2-linear" />
                <Icon icon="solar:home-2-bold" className="active" />
            </div>
            <span className="text">home</span>
        </button>

        <button className="nav-link">
            <div className="stack icon">
                <Icon icon="solar:graph-up-linear" />
                <Icon icon="solar:graph-up-bold" className="active" />
            </div>
            <span className="text">market</span>
        </button>

        <div className="nav-link main ">
            <button><Icon icon="hugeicons:finger-print-scan" /></button>
        </div>

        <button className="nav-link">
            <div className="stack icon">
                <Icon icon="solar:wallet-linear" />
                <Icon icon="solar:wallet-bold" className="active" />
            </div>
            <span className="text">wallet</span>
        </button>

        <button className="nav-link">
            <div className="stack icon">
                <Icon icon="solar:user-linear" />
                <Icon icon="solar:user-bold" className="active" />
            </div>
            <span className="text">profile</span>
        </button>

    </footer>
  )
}

export default Footer