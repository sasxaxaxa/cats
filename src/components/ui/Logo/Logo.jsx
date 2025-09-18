import { Link } from "react-router-dom"


const Logo = () => {
  return (
    <Link
    to='/'
    >
      <img 
        src='/icons/logo.svg'
        alt=""
        width="63px"
        height="52px"
      />
    </Link>
  )
}

export default Logo;