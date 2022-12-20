// import PropTypes from 'prop-types';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const Modal = ({ children }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const overlayRef = useRef(null);

  const closeModal = () => {
    if (location.pathname.includes('/search/')) {
      navigate(`/search`);
    } else {
      navigate(`/category/${page}`);
    }
  };

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

  useEffect(() => {
    document.addEventListener('keyup', handleEscape);
    return () => {
      document.removeEventListener('keyup', handleEscape);
    };
  }, []);

  return (
    ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          {children}
          <button
            className={style.close}
            onClick={() => closeModal() }>
            <CloseIcon/>
          </button>
        </div>
      </div>,
      document.getElementById('modal-root')
    )
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
