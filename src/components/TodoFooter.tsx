import { transFrom } from '@mongez/localization';
import useLanguageStore from '../zustand/useLanguageStore';

const TodoFooter = () => {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <div className="p-4 flex justify-center bg-red-500 text-white">
      {transFrom(lang, 'createdby')}{' '}
      <span className="mx-2 font-bold">{transFrom(lang, 'author')}</span> &copy;
      {transFrom(lang, 'copyrights')}
    </div>
  );
};

export default TodoFooter;
