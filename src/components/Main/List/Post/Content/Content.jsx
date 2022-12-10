import PropTypes from 'prop-types';
import style from './Content.module.css';
import {Text} from '../../../../../UI/Text';

export const Content = ({title, author}) => {
  console.log('Content');
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text AS='a'
          size={18} tsize={24}
          className={style.linkPost} href="#post">
          {title}
        </Text>
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
};
