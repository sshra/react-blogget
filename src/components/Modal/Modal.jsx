// import PropTypes from 'prop-types';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { Fragment, useEffect, useRef } from 'react';
import { Text } from '../../UI/Text';
import FormComment from '../Main/List/Post/Comments/FormComment';
import Comments from '../Main/List/Post/Comments';
import { useCommentsData } from '../../hooks/useCommentsData';
import { CentredText } from '../../UI/CentredText/CentredText';

export const Modal = ({ postId: id, closeModal }) => {
  const overlayRef = useRef(null);
  const { post, comments } = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const handleEscape = e => {
    if (
      (e.target.tagName !== 'TEXTAREA') &&
      (e = e || window.event) &&
      (e.key === 'Escape')) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', handleEscape);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keyup', handleEscape);
    };
  }, []);

  return (
    ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          { post ?
            <Fragment>
              <h2 className={style.title}>{post.title}</h2>
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
                  {post.selftext}
                </Markdown>
              </div>
              <Text As='p' className={style.author}>
                {post.author}
              </Text>

              <FormComment />
              <Comments comments={comments} />
            </Fragment> :
            <CentredText text='Loading an article...' />
          }
          <button className={style.close} onClick={closeModal}>
            <CloseIcon/>
          </button>
        </div>
      </div>,
      document.getElementById('modal-root')
    )
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
