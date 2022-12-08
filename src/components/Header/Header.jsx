import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import { Heading } from './Heading/Heading';

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text="Page title"/>
          <Search />
          <Auth auth={false} />
        </div>
      </Layout>
    </header>
  )
}