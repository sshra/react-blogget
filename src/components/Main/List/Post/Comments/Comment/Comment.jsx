import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';
import style from './Comment.module.css';
import DateTime from '../../DateTime';
import { Text } from '../../../../../../UI/Text';

export const Comment = ({ data }) => {
  const { author, body, created, id,
    permalink: src, children: childrenRecords } = data.data;

  if (childrenRecords) {
    console.log(childrenRecords);
  }

  return (
    !childrenRecords &&
    <li key={id} className={style.comment}>
      <Text As='a' color='orange'
        size={12}
        tsize={14}
        className={style.linkAuthor} href="#author">
        {author}
      </Text>
      <Markdown className={style.commentBody} options={
        { wrapper: 'div', forceWrapper: true }
      }>
        {body}
      </Markdown>
      <DateTime className={style.date} timestamp={created} />
      <div className={style.srcLink}>
        <Text As='a'
          size={14}
          tsize={16}
          target="_blank"
          rel="noreferrer"
          href={`https://reddit.com/${src}`}
          alt="read on reddit">
          Read on Reddit.com
        </Text>
      </div>
    </li>
  );
};

Comment.propTypes = {
  data: PropTypes.object,
};
