import './header.css'
import logo from './logo.svg'

export const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="smartfit logo"/>
    </div>
  )
}