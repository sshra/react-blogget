// import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import style from './FormComment.module.css';

export const FormComment = () => {
  const [isOpened, setIsOpened] = useState(false);

  const textRef = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(textRef.current.value);
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
            <label>
              <textarea ref={textRef}></textarea>
            </label>
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
