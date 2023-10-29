import React, { useState } from 'react';

export default function ThemeMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const switchTheme = (e) => {
    if (e.target.checked) {
      setTheme('dark');
      document.getElementById('root').setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.getElementById('root').setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='theme-switch-wrapper'>
      <p>Dark mode</p>
      <label className='theme-switch' htmlFor='checkbox'>
        <input
          defaultChecked={theme === 'dark'}
          onChange={(e) => switchTheme(e)}
          type='checkbox'
          id='checkbox'
        />
        <div className='slider round'></div>
      </label>
    </div>
  );
}
