
import barIcon from '../assets/icons/bars.svg'
import batteryIcon from '../assets/icons/battery.svg'
import wifiIcon from '../assets/icons/wifi.svg'


const NotificationBar = () => {
  return (
    <div className='notification-bar shrink-0'>
      <span className='time'>12:30</span>
      
      <div className='status-icons'>
        <img src={barIcon} alt="" />
        <img src={wifiIcon} alt="" />
        <img src={batteryIcon} alt="" />
      </div>
    </div>
  )
}

export default NotificationBar