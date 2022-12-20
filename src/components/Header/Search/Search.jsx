import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchQuery } from '../../../store/search/searchSlice';
import Svg from '../../../UI/Svg';
import style from './Search.module.css';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handlerSubmit = e => {
    e.preventDefault();
    navigate('/search');
    dispatch(searchQuery({ search }));
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
