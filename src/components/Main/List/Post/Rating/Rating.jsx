import {useState} from 'react';
import style from './Rating.module.css';
import PropTypes from 'prop-types';
// import style from './Rating.module.css';

export const Rating = (props) => {
  const [ups, setUps] = useState(props.ups);

  return (
    <div className={style.rating}>
      <button
        onClick={() => setUps(ups + 1)}
        className={style.up}
        aria-label="Increase rating" />
      <p className={style.ups}>{ups}</p>
      <button
        onClick={() => setUps(ups - 1)}
        className={style.down}
        aria-label="Decrease rating"/>
    </div>
  );
};

Rating.propTypes = {
  ups: PropTypes.number,
};
