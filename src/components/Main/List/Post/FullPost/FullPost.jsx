// import PropTypes from 'prop-types';
import style from './FullPost.module.css';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import { Text } from '../../../../../UI/Text';
import FormComment from '../Comments/FormComment';
import Comments from '../Comments';
import { useCommentsData } from '../../../../../hooks/useCommentsData';
import Preloader from '../../../../../UI/Preloader';
import { Toast } from '../../../../../UI/Toast/Toast';
import { useParams } from 'react-router-dom';

export const FullPost = () => {
  const { id } = useParams();
  const { data, loading, error } = useCommentsData(id);

  return (
    loading ?
      <Preloader size={100}/> :
      (error !== '' ?
      <>
        <Preloader size={250}/>
        <Toast type='error'>{error}</Toast>
      </> :
      (data.post && <>
        <h2 className={style.title}>{data.post.title}</h2>
        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                }
              }
            }
          }}>
            {data.post.selftext}
          </Markdown>
        </div>
        <Text As='p' className={style.author}>
          {data.post.author}
        </Text>
        <FormComment />
        <Comments comments={data.comments} />
      </>))
  );
};

FullPost.propTypes = {
  postId: PropTypes.string,
};
