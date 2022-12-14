import { useEffect, useState } from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { assignId } from '../../../utils/generateRandomId';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as MainIcon } from './img/home.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { debounceRaf } from '../../../utils/debounce';
import { Text } from '../../../UI/Text';
import { useNavigate } from 'react-router-dom';

const LIST = [
  { value: 'Main', Icon: MainIcon, link: 'rising' },
  { value: 'Top', Icon: TopIcon, link: 'top' },
  { value: 'Best', Icon: BestIcon, link: 'best' },
  { value: 'Hot', Icon: HotIcon, link: 'hot' },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState();
  const [isDropdown, setIsDropdown] = useState(true);
  const [menuLabel, setMenuLabel] = useState('Main');
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdownOpen(false);
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
          {menuLabel}
          <ArrowIcon width={15} height={15} />
        </button>
      </div>
      }
      {(isDropdownOpen || !isDropdown) &&
        <ul
          className={style.list}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {LIST.map(({ value, Icon, id, link }) => (
            <Text As='li' key={id}>
              <button
                className={style.btn}
                onClick={() => {
                  setMenuLabel(value);
                  navigate(`/category/${link}`);
                }}>
                {value}
                {Icon && <Icon width={32} height={32}/>}
              </button>
            </Text>
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
