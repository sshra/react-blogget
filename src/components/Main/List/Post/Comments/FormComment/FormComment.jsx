// import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './FormComment.module.css';
import { updateComment } from '../../../../../../store';

export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const textRef = useRef(null);

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
          <div>
            <textarea value={value} ref={textRef} onChange={handleChange} />
          </div>
          <button>Send</button>
        </form>) : (
        <button onClick={() => setIsOpened(!isOpened)}>
          Write a comment
        </button>)
      }
    </div>
  );
};

FormComment.propTypes = {

};
