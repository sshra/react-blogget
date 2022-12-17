import Preloader from '../../../UI/Preloader';
import style from './List.module.css';
import Post from './Post';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsDataRequestAsync } from '../../../store/postsData/action';
import { Outlet, useParams } from 'react-router-dom';
import { BeautyButton } from '../../../UI/BeautyButton/BeautyButton';
import PropTypes from 'prop-types';

export const List = ({ pageSize = 10, autoloadDepth = 2 }) => {
  const { posts: postsData, loading, depth } =
    useSelector(state => state.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();
  const isDeepEnough = depth > autoloadDepth;

  useEffect(() => {
    dispatch(postsDataRequestAsync(page, pageSize));
  }, [page]);

  useEffect((isDeepEnough) => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.length && entries[0].isIntersecting) {
        dispatch(postsDataRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    if (endList.current) {
      observer.observe(endList.current);
    }

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [depth]);

  return (
    <>
      <ul className={style.list}>
        {postsData.map((postData, index) =>
          <Post key={postData.data.id} postData={postData.data} />)}
        {loading && (<Preloader height={250} size={100}/>)}
        { isDeepEnough ?
          <BeautyButton onClick={ () => dispatch(postsDataRequestAsync()) }>
            Show more
          </BeautyButton> :
          <li ref={endList} className={style.end} />
        }
      </ul>
      <Outlet/>
    </>
  );
};

List.propTypes = {
  pageSize: PropTypes.number,
  autoloadDepth: PropTypes.number,
};
