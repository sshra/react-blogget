import Preloader from '../../../UI/Preloader';
import style from './List.module.css';
import Post from './Post';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsDataRequestAsync } from '../../../store/postsData/action';
import { Outlet, useParams } from 'react-router-dom';

export const List = () => {
  const [postsData, loading] = useSelector(state =>
    [state.posts.posts, state.posts.loading]);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postsDataRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.length && entries[0].isIntersecting) {
        dispatch(postsDataRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {postsData.map((postData, index) =>
          <Post key={postData.data.id} postData={postData.data} />)}
        {loading && (<Preloader height={250} size={100}/>)}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet/>
    </>
  );
};
