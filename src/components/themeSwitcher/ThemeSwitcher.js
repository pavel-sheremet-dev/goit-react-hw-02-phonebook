import PropTypes from 'prop-types';

import sprite from '../../images/sprite.svg';
import { ThemeBtn, ThemeIcon } from './ThemeSwitcher.styled';

const ThemeSwitcher = ({ onBtnClick, currentTheme }) => {
  return (
    <ThemeBtn type="button" onClick={onBtnClick}>
      <ThemeIcon>
        <use
          href={`${sprite}#${
            currentTheme === 'light' ? 'icon-sun' : 'icon-moon'
          }`}
        ></use>
      </ThemeIcon>
    </ThemeBtn>
  );
};

ThemeSwitcher.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
