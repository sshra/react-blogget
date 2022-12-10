import style from './Post.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as TrashIcon} from './img/trash.svg';

import DateTime from './DateTime';
import Rating from './Rating';
import Thumbnail from './Thumbnail';
import Content from './Content';

export const Post = ({postData}) => {
  const {title, author, ups, date, thumbnail} = postData;
  return (
    <li className={style.post}>
      <Thumbnail src={thumbnail} altText={title}/>
      <Content title={title} author={author} />
      <button className={style.delete}>
        <TrashIcon />
      </button>
      <Rating ups={ups}/>
      <DateTime dateTime={date}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
