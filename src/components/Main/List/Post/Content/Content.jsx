import PropTypes from 'prop-types';
import style from './Content.module.css';
import { Text } from '../../../../../UI/Text';
import { useState } from 'react';
import Modal from '../../../../../UI/Modal';
import { FullPost } from '../FullPost/FullPost';

export const Content = ({ title, author, postId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text AS='a'
          size={14} tsize={22}
          className={style.linkPost} href="#post"
          onClick={() => {
            setIsModalOpen(true);
          }}>
          {title}
        </Text>
      </Text>
      <Text As='a' color='orange'
        size={12}
        tsize={14}
        className={style.linkAuthor} href="#author">
        {author}
      </Text>
      {isModalOpen && <Modal
        closeModal={() => setIsModalOpen(false)}>
        <FullPost postId={postId}/>
      </Modal>}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  postId: PropTypes.string,
};
