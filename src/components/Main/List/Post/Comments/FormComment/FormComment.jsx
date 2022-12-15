// import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './FormComment.module.css';
import { updateComment } from '../../../../../../store/commentReducer';
import { BeautyButton } from '../../../../../../UI/BeautyButton/BeautyButton';
import { Text } from '../../../../../../UI/Text';
import { useAuth } from '../../../../../../hooks/useAuth';

export const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const textRef = useRef(null);
  const [auth] = useAuth();

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(textRef.current.value);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };

  useEffect(() => {
    if (isOpened) {
      textRef.current.focus();
    }
  }, [isOpened]);

  return (
    <div className={style.formContainer}>
      {isOpened ? (
        <form onSubmit={onFormSubmit} className={style.form}>
          <h3 className={style.formTitle}>Wtire your comment:</h3>
          <Text className={style.userName} bold size={16}>{auth.name}</Text>
          <div>
            <textarea
              className={style.textarea}
              value={value}
              ref={textRef}
              onChange={handleChange} />
          </div>
          <BeautyButton>Send</BeautyButton>
        </form>) : (
        <BeautyButton onClick={() => setIsOpened(!isOpened)}>
          Write a comment
        </BeautyButton>)
      }
    </div>
  );
};

FormComment.propTypes = {

};
