import style from './Post.module.css';
import PropTypes from 'prop-types';
import Svg from '../../../../UI/Svg';

import DateTime from './DateTime';
import Rating from './Rating';
import Thumbnail from './Thumbnail';
import Content from './Content';

export const Post = ({ postData }) => {
  console.log(postData);

  const { title, author, ups, created: timestamp, thumbnail } = postData;
  return (
    <li className={style.post}>
      <Thumbnail src={thumbnail} altText={title}/>
      <Content title={title} author={author} />
      <button className={style.delete}>
        <Svg iconName='trashCan'/>
      </button>
      <Rating ups={ups}/>
      <DateTime timestamp={timestamp} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
