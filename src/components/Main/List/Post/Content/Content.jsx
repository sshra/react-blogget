import PropTypes from 'prop-types';
import style from './Content.module.css';
import { Text } from '../../../../../UI/Text';
import { Link, useLocation } from 'react-router-dom';

export const Content = ({ title, author, postId }) => {
  const location = useLocation();

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link
          className={style.linkPost}
          to={`${location.pathname}/post/${postId}`}>
          <Text
            size={14} tsize={22}
            className={style.linkPost} href="#post">
            {title}
          </Text>
        </Link>
      </Text>
      <Text As='a' color='orange'
        size={12}
        tsize={14}
        className={style.linkAuthor} href="#author">
        {author}
      </Text>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  postId: PropTypes.string,
};
