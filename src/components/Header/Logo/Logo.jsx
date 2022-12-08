import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => {
  return (
    <a href='/' className={style.link}>
      <img src={logo} alt="Logo of the Blogget" className={style.logo} />
    </a>
  )
}