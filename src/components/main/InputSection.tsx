import React, {
  FormEvent, useContext, useEffect, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import MyTasksContext from '../../context/TasksContext/MyTasksContext';
import { MyTasks } from '../../context/TasksContext/types';
import ActionButton from './ActionButton';

type InputSectionProps = {
  cancelClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    | null) => void,
  buttonName: string | null,
  title: string | null,
  description: string | null,
  id: number | null,
}

const InputSection = ({
  cancelClick, buttonName = null, title = null, description = null, id = null,
}: InputSectionProps) => {
  const intl = useIntl();

  const placeholderDescription = intl.formatMessage({ id: 'task.placeholder.description' });

  const placeholderTitle = intl.formatMessage({ id: 'task.placeholder.title' });

  const {
    myTags, setMyTasks, myTasks,
  } = useContext(MyTasksContext);

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const [textareaTitle, setTextareaTitle] = useState<string>('');

  const [textareaDescription, setTextareaDescription] = useState<string>('');

  useEffect(() => {
    setTextareaTitle(title || '');
    setTextareaDescription(description || '');
    if (id) setIsDisabled(false);
  }, []);

  function autoGrowing() : void {
    const textareas : NodeListOf<HTMLTextAreaElement> = document.querySelectorAll('.textarea-add-task') as NodeListOf<HTMLTextAreaElement>;

    textareas.forEach((textarea : HTMLTextAreaElement) => {
      const textElement : HTMLTextAreaElement = textarea;

      textElement.style.height = 'auto';
      textElement.style.height = `${textarea.scrollHeight}px`;
    });
  }

  function handleTitleChange(e : FormEvent) : void {
    const target : HTMLTextAreaElement = e.target as HTMLTextAreaElement;

    if (target.value.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

    setTextareaTitle(target.value);
  }

  function handleClick(e : React.MouseEvent<HTMLButtonElement, MouseEvent>)
  : void {
    e.preventDefault();
    function newId() : number {
      if (id) {
        return id;
      }

      return myTasks.length > 0 ? myTasks[myTasks.length - 1].id + 1 : 1;
    }

    const newTask : MyTasks = {
      id: newId(),
      title: textareaTitle,
      description: textareaDescription,
      tags: myTags,
      isDone: false,
    };

    if (id) {
      myTasks.splice(
        myTasks.findIndex((task : MyTasks) => task.id === id),
        1,
        newTask,
      );
      setMyTasks(myTasks);
      cancelClick(null);
      const jsonTasks : string = JSON.stringify(myTasks);

      localStorage.setItem('myTasks', jsonTasks);
    } else {
      setMyTasks([...myTasks, newTask]);
      const jsonTasks : string = JSON.stringify([...myTasks, newTask]);

      localStorage.setItem('myTasks', jsonTasks);
    }

    setTextareaTitle('');
    setTextareaDescription('');
    setIsDisabled(true);
  }

  return (
    <form>
      <div
        className="d-flex flex-column align-items-center
      bg-opacity-50 bg-black rounded-3 p-2"
      >
        <textarea
          value={ textareaTitle }
          onChange={ handleTitleChange }
          onInput={ autoGrowing }
          className="container-fluid bg-transparent border-0 text-white textarea-add-task"
          placeholder={ placeholderTitle }
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <textarea
          value={ textareaDescription }
          onChange={ (e) => setTextareaDescription(e.target.value) }
          onInput={ autoGrowing }
          className="container-fluid bg-transparent border-0 text-white textarea-add-task"
          placeholder={ placeholderDescription }
        />
        <div
          className="d-flex align-items-center align-self-start"
        >
          { myTags.map((tag) => (
            <div
              className="badge mr-2 mb-2 btn btn-outline-dark text-primary"
              key={ tag.title }
            >
              <span className="me-1">{ tag.title }</span>
            </div>
          )) }
        </div>
      </div>
      <div
        className="d-flex my-3 align-self-start"
      >
        <ActionButton
          onClick={ handleClick }
          isDisabled={ isDisabled }
          buttonName={ buttonName || 'input.add.button.name' }
        />
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={ cancelClick }
        >
          <FormattedMessage id="input.cancel.button.name" />
        </button>
      </div>
    </form>
  );
};

export default InputSection;
