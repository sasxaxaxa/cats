import { Link } from "react-router-dom";
import Logo from "../../ui/Logo/Logo";
import './Header.scss';

const headerLinks = [
  {
    title: 'Почему мы?',
    href: '/'
  },
  {
    title: 'Номера',
    href: '/'
  },
  {
    title: 'Отзывы',
    href: '/'
  },
  {
    title: 'Как нас найти?',
    href: '/'
  },
]

const Header = () => {
  return (
    <header className="header header-container">
      <Logo />
      <nav className="header__nav">
        <ul className="header__nav-list">
          {headerLinks.map((link, index) => (
          <Link 
            to={link.href}
            key={index}
            className="header__nav-link"
          >
            {link.title}
          </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;