import Preloader from '../../../UI/Preloader';
import style from './List.module.css';
import Post from './Post';
import { usePosts } from '../../../hooks/usePosts';

export const List = () => {
  const [postsData, loading] = usePosts();
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
