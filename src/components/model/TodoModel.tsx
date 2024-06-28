import { transFrom } from '@mongez/localization';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import useLanguageStore from '../../zustand/useLanguageStore';
import useTodoListStore from '../../zustand/useTodoListStore';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import toast from 'react-hot-toast';

type propsType = {
  heading: string;
  id?: number;
  title?: string;
  desc?: string;
  setShowModel: (value: boolean) => void;
};

const TodoModel = ({ heading, id, title = '', desc = '', setShowModel }: propsType) => {
  const lang = useLanguageStore((state) => state.lang);
  const addTodo = useTodoListStore((state) => state.addTodo);
  const editTodo = useTodoListStore((state) => state.editTodo);
  const [inputTitle, setInputTitle] = useState(title);
  const [description, setDescription] = useState(desc);

  const handleCancel = () => {
    setShowModel(false);
  };
  const ref = useOutsideClick(handleCancel);

  const handleAddTodo = () => {
    const Title = inputTitle.trim();
    const desc = description.trim();

    if (!Title || !desc) {
      toast.error(transFrom(lang, 'fillAllFields'), {
        position: 'top-center',
      });
      return;
    }

    heading === 'addTodo'
      ? addTodo(inputTitle, description)
      : editTodo(id!, inputTitle, description);
    setShowModel(false);
    toast.success(`${transFrom(lang, heading)} ${transFrom(lang, 'done')}`, {
      position: 'top-center',
    });
  };

  return createPortal(
    <section
      className="w-screen h-screen absolute top-0 left-0"
      style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
    >
      <div className="w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.2)]">
        <div ref={ref} className="w-[500px] h-[400px] p-4 flex flex-col rounded-lg bg-white">
          <h2 className="text-xl font-bold mb-4">{transFrom(lang, heading)}</h2>
          <div className="flex flex-col gap-4">
            <label htmlFor="title">{transFrom(lang, 'todoTitle')}</label>
            <input
              type="text"
              id="title"
              name="title"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              placeholder={`${transFrom(lang, 'todo')}...`}
              className="p-1 border border-gray-500 rounded focus:outline-none"
            />
            <label htmlFor="">{transFrom(lang, 'todoDesc')}</label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={transFrom(lang, 'details')}
              className="w-full h-32 p-2 border border-gray-500 rounded focus:outline-none resize-none"
            ></textarea>
          </div>
          <div className="mt-5 flex justify-evenly">
            <button onClick={handleAddTodo} className="px-6 py-2 rounded-full bg-black text-white">
              {transFrom(lang, 'save')}
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
    </section>,
    document.getElementById('todoModel')!
  );
};

export default TodoModel;
