import PropTypes from 'prop-types';
import Comment from './Comment';
import { Text } from '../../../../../UI/Text';
// import style from './Comments.module.css';

export const Comments = ({ comments }) =>
  <ul>
    {comments.length ?
        comments.map((commentItem, commentIndex) =>
          (commentItem.kind === 't1' &&
          <Comment key={commentItem.data.id} data={commentItem}></Comment>)) :
          <Text bold>No comments</Text>
    }
  </ul>;

Comments.propTypes = {
  comments: PropTypes.array,
};
