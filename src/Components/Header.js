/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import {useState} from 'react';
import logo from './react-svg.svg';
function Header() {
  const [value, setValue] = useState(0);
  const min = 0;
  const max = 1;
  const [theme, setTheme] = useState('dark');
  const handleClick =()=> {
    setValue((prev) => {
      return prev === min ? max : min; // 👇️ toggle visibility
    });
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    setTheme(newTheme);

    // localStorage.setItem(newTheme);
  };

  return (
    <nav>
      <div className="flex">
        <img src={logo} className="logo" alt="logo"/>
        <p className="title">ReactFacts </p>
      </div>

      <div className="flex">
        <p className="light-text">Light</p>
        <input className="toggle"
          type='range'
          min={min}
          max={max}
          onChange={handleClick}
          value = {value}
        />
        <p className="dark-text">Dark</p>
      </div>
    </nav>
  );
}

export default Header;
