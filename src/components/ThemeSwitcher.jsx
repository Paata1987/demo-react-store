import React, { useEffect, useState } from 'react';
import '../styles/theme.css';
import styles from '../styles/ThemeSwitcher.module.css';

import BootstrapSwitchButton from 'bootstrap-switch-button-react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const handleThemeChange = async() => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };

  return (
    <div className={styles.checkbox} >
      <label >Dark Theme</label>
      <BootstrapSwitchButton
       type="checkbox"
        id="theme-switcher"
        checked={!isDarkMode}
        onChange={handleThemeChange}
        size="sm"
      />
    </div>
  );
};

export default ThemeSwitcher;
