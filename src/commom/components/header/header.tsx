import { logo } from '../../images'
import './header.css'

export const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="smartfit logo"/>
    </div>
  )
}