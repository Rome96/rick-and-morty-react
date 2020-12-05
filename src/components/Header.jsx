import {useState, useContext} from 'react';
import ThemeContext from '../context/themeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleClick = _ => {
    setDarkMode(!darkMode);
    theme === 'bg-light' ? updateTheme('bg-dark') : updateTheme('bg-light')
  };

  return (
    <div className="header">
      <h1>React Hooks</h1>
      <button type="button" onClick={handleClick}>
        {
          darkMode ? 'Dark Mode' : 'Light Mode'
        }
      </button>
    </div>
  );
};

export default Header;
