import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';
import {debounceRaf} from '../../../utils/debounce';

const LIST = [
  {value: 'Front', Icon: HomeIcon},
  {value: 'Looked', Icon: EyeIcon},
  {value: 'Saved', Icon: SaveIcon},
  {value: 'My posts', Icon: PostIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState();
  const [isDropdown, setIsDropdown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && <div className={style.wrapperBtn}>
        <button
          className={style.btn}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Add Item
          <ArrowIcon width={15} height={15} />
        </button>
      </div>
      }
      {(isDropdownOpen || !isDropdown) &&
        <ul
          className={style.list}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {LIST.map(({value, Icon, id}) => (
            <li key={id}>
              <button
                className={style.btn}
                onClick={() => console.log(value)}>
                {value}
                {Icon && <Icon width={32} height={32}/>}
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};

