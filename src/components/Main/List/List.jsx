import { useContext } from 'react';
import { postsContext } from '../../../context/postsContext';
import Preloader from '../../../UI/Preloader';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const { posts: postsData, loading } = useContext(postsContext);
  return (
    <ul className={style.list}>
      {loading ?
        (<Preloader height={250} size={100}/>) :
        postsData.map((postData, index) =>
          <Post key={postData.data.id} postData={postData.data} />)
      }
    </ul>
  );
};
