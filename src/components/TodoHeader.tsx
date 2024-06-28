import { transFrom } from '@mongez/localization';
import useLanguageStore from '../zustand/useLanguageStore';
import { useDarkMode } from '../hooks/useDarkMode';
import icons from '../constant/icons';

const TodoHeader = () => {
  const { theme, toggleTheme } = useDarkMode();
  const lang = useLanguageStore((state) => state.lang);
  const setLang = useLanguageStore((state) => state.setLang);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
  };

  const handleToggleTheme = () => {
    toggleTheme();
    // document.body.classList.toggle('dark');
    // console.log(document.body.classList);
  };

  return (
    <header className="p-4 sm:mx-4 flex items-center justify-between focus:outline-none shadow-2xl shadow-red-500/20  ">
      <h1 className="text-3xl font-bold">{transFrom(lang, 'title')}</h1>
      <button onClick={handleToggleTheme} className="w-6 h-6">
        {theme === 'dark' ? (
          <img src={icons.sunIcon} alt="sun icon" />
        ) : (
          <img src={icons.moonIcon} alt="moon icon" />
        )}
      </button>
      <select
        name="lang"
        id="lang"
        className="w-32 border border-gray-400 rounded dark:text-black"
        value={lang}
        onChange={handleLangChange}
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </header>
  );
};

export default TodoHeader;
