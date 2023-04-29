import React, { useEffect } from "react";
import "../styles/theme.css";
import styles from "../styles/ThemeSwitcher.module.css";

import BootstrapSwitchButton from "bootstrap-switch-button-react";

const ThemeSwitcher = ({ isDarkMode, onThemeChange }) => {
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
    } else {
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <div className={styles.checkbox}>
      <label>Dark Theme</label>
      <BootstrapSwitchButton
        type="checkbox"
        id="theme-switcher"
        checked={!isDarkMode}
        onChange={onThemeChange}
        size="sm"
        onstyle={isDarkMode ? "light" : "dark"}
      />
    </div>
  );
};

export default ThemeSwitcher;
