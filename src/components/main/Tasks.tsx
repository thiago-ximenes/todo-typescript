import { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyTasksContext from '../../context/TasksContext/MyTasksContext';
import { MyTasks } from '../../context/TasksContext/types';
import InputSection from './InputSection';
import TodoItem from './TodoItem';

const Tasks : React.FC = () => {
  const { myTasks, setMyTasks, setInputTaskOn } = useContext(MyTasksContext);

  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    if (localStorage.getItem('myTasks')) {
      const jsonTasks : MyTasks[] = JSON.parse(localStorage.getItem('myTasks') || '');

      setMyTasks(jsonTasks);
    }
  }, []);

  function handleChange(taskId : number) {
    toast.success(<FormattedMessage id="tasks.toast.task.done" />, {
      theme: 'dark',
      position: 'bottom-center',
      autoClose: 1700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false,
    });
    const newTasks = myTasks.map((task : MyTasks) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone;
      }

      return task;
    });

    setMyTasks(newTasks);
    localStorage.setItem('myTasks', JSON.stringify(newTasks));
  }

  function deleteTask(taskId : number) {
    const newTasks = myTasks.filter((task : MyTasks) => task.id !== taskId);

    toast(<FormattedMessage id="delete.task.message" />, {
      theme: 'dark',
      position: 'bottom-center',
      autoClose: 1700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false,
    });
    setEditIndex(null);
    setMyTasks(newTasks);
    localStorage.setItem('myTasks', JSON.stringify(newTasks));
  }

  function edit(index : number) {
    setInputTaskOn((false));
    setEditIndex(index);
  }

  return (
    myTasks
      .length > 0
      ? (
        <div>
          {myTasks
            .filter((task : MyTasks) => task.isDone === false)
            .map((task, index) => (editIndex !== index
              ? (
                <TodoItem
                  key={ task.id }
                  task={ task }
                  onChange={ handleChange }
                  onDelete={ deleteTask }
                  edit={ edit }
                  index={ index }
                />
              )
              : (
                <InputSection
                  cancelClick={ () => setEditIndex(null) }
                  buttonName="input.save.button.name"
                  title={ task.title }
                  description={ task.description }
                  id={ task.id }
                  key={ task.id }
                />
              )))}
        </div>
      )
      : (
        <div />
      )
  );
};

export default Tasks;
