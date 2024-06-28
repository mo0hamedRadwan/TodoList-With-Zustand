import { transFrom } from '@mongez/localization';
import { createPortal } from 'react-dom';
import useLanguageStore from '../../zustand/useLanguageStore';
import useTodoListStore from '../../zustand/useTodoListStore';
import toast from 'react-hot-toast';

type propsType = {
  id: number;
  setShowModel: (value: boolean) => void;
};

const AlertModel = ({ id, setShowModel }: propsType) => {
  const lang = useLanguageStore((state) => state.lang);
  const removeTodo = useTodoListStore((state) => state.removeTodo);

  const handleDeleteTodo = () => {
    // console.log('deleteTodo', id);
    setShowModel(false);
    removeTodo(id);
    toast.success(`${transFrom(lang, 'deleteTodo')} ${transFrom(lang, 'done')}`, {
      position: 'top-center',
    });
  };

  return createPortal(
    <div className="w-screen h-screen absolute top-0 left-0">
      <div className="w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.2)]">
        <div className="w-[400px] h-[120px] p-4 flex flex-col rounded-lg bg-white">
          <h3>{transFrom(lang, 'alert')}</h3>
          <div className="mt-5 flex justify-evenly">
            <button
              onClick={handleDeleteTodo}
              className="px-6 py-2 rounded-full bg-black text-white"
            >
              {transFrom(lang, 'delete')}
            </button>
            <button
              onClick={() => setShowModel(false)}
              className="px-6 py-2 rounded-full bg-red-600 text-white"
            >
              {transFrom(lang, 'cancel')}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('alertModel')!
  );
};

export default AlertModel;
