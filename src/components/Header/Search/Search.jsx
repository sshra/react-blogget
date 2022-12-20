import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRequest } from '../../../store/search/action';
import Svg from '../../../UI/Svg';
import style from './Search.module.css';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(searchRequest(search));
  };


  return (<form className={style.form} onSubmit={handlerSubmit}>
    <input
      className={style.search}
      onChange={e => setSearch(e.target.value)}
      value={search}
      type="search" />
    <button className={style.button} type="submit">
      <Svg iconName='search' className={style.svg} />
    </button>
  </form>);
};
