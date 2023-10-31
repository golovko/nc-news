export default function ThemeMode() {
  let initTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : 'light';
  document.getElementById('root').setAttribute('data-theme', initTheme);

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.getElementById('root').setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.getElementById('root').setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <div className='theme-switch-wrapper'>
      <p>Dark mode</p>
      <label className='theme-switch' htmlFor='checkbox'>
        <input
          defaultChecked={localStorage.getItem('theme') === 'dark'}
          onChange={(e) => switchTheme(e)}
          type='checkbox'
          id='checkbox'
        />
        <div className='slider round'></div>
      </label>
    </div>
  );
}
