import Svg from '../../../UI/Svg';
import style from './Search.module.css';

export const Search = () =>
  <form className={style.form}>
    <input className={style.search} type="search" />
    <button className={style.button}>
      <Svg iconName='search' className={style.svg} />
    </button>
  </form>
;
