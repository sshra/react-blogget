import PropTypes from 'prop-types';
import style from './Toast.module.css';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';

export const Toast = ({ type, children, onDelete }) => {
  const overlayRef = useRef(null);
  const [isShown, setIsShown] = useState(true);

  const handleToastClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      setIsShown(false);
    }
  };

  const handleEscape = e => {
    if (
      (e = e || window.event) &&
      (e.key === 'Escape')) {
      setIsShown(false);
    }
  };

  useEffect(() => {
    overlayRef.current.addEventListener('click', handleToastClick);
    document.addEventListener('keyup', handleEscape);
    return () => {
      document.removeEventListener('keyup', handleEscape);
    };
  }, []);

  const classes = classNames(
    style.toast,
    { [style[`type-${type}`]]: type },
    style.show,
  );

  return (
    isShown ? (
      ReactDOM.createPortal(
        <div className={style.overlay} ref={overlayRef} >
          <div className={classes}>
            {children}
          </div>
        </div>,
        document.getElementById('error-root')
      )) :
      (<></>)
  );
};

Toast.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func
};
