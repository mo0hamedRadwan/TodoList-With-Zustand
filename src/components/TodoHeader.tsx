import { transFrom } from '@mongez/localization';
import useLanguageStore from '../zustand/useLanguageStore';

const TodoHeader = () => {
  const lang = useLanguageStore((state) => state.lang);
  const setLang = useLanguageStore((state) => state.setLang);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
  };

  return (
    <header className="p-4 sm:mx-4 flex items-center justify-between focus:outline-none shadow-2xl shadow-red-500/20  ">
      <h1 className="text-3xl font-bold">{transFrom(lang, 'title')}</h1>
      <select
        name="lang"
        id="lang"
        className="w-32 border border-gray-400 rounded"
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
