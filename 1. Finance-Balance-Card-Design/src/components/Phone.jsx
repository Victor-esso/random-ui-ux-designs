
import NotificationBar from './NotificationBar'

const Phone = ({ children }) => {
  return (
    <div className='phone'>
        <NotificationBar />
        {children}
    </div>
  )
}

export default Phone