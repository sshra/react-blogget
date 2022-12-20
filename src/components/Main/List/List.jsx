import Preloader from '../../../UI/Preloader';
import style from './List.module.css';
import Post from './Post';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { BeautyButton } from '../../../UI/BeautyButton/BeautyButton';
import PropTypes from 'prop-types';
import CentredText from '../../../UI/CentredText';
import { Toast } from '../../../UI/Toast/Toast';
import { postsPending, postsPendingAutoLoad }
  from '../../../store/postsData/postsSlice';

export const List = ({ pageSize = 10, autoloadDepth = 2 }) => {
  const { posts: postsData, loading, depth, isLast, error } =
    useSelector(state => state.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();
  const isDeepEnough = depth >= autoloadDepth;
  const token = useSelector(state => state.token.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/403');
    } else {
      dispatch(postsPending({ newPage: page, newPageSize: pageSize }));
    }
  }, [token, page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.length && entries[0].isIntersecting) {
        dispatch(postsPendingAutoLoad({ autoloadDepth }));
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
  });

  return (
    token &&
      <>
        <ul className={style.list}>
          {postsData.map((postData, index) =>
            <Post key={postData.data.id} postData={postData.data} />)}
          {loading && (<Preloader height={250} size={100}/>)}
          {!loading && isDeepEnough && !isLast ?
            <li className={style.showMoreContainer} >
              <BeautyButton onClick={ () => dispatch(postsPending({})) }>
                Show more
              </BeautyButton>
            </li> :
            postsData.length ? <li ref={endList} className={style.end} /> : ''
          }
          {error && <Toast type='error'>{error}</Toast> }
          {isLast && <CentredText>No more records!</CentredText> }
        </ul>
        <Outlet/>
      </>
  );
};

List.propTypes = {
  pageSize: PropTypes.number,
  autoloadDepth: PropTypes.number,
};
