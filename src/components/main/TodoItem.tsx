import { BsFillPencilFill, BsFillTrash2Fill } from 'react-icons/bs';
import { MyTasks } from '../../context/TasksContext/types';

interface Props {
  task: MyTasks
  index: number
  onChange: (taskId: number) => void
  onDelete: (taskId: number) => void
  edit: (index: number) => void
}

const TodoItem = ({
  task, index, onChange, onDelete, edit,
} : Props) => (
  <div>
    <div
      className="radio-label"
      key={ task.id }
    >
      <div
        className="radio-label"
        key={ task.id }
      >
        <div
          className="d-flex align-items-center py-2 px-3"
        >
          <input
            type="radio"
            className="form-check-input my-auto"
            name={ `task-${task.title}-${task.id}` }
            id={ `task-${task.id}` }
            checked={ task.isDone }
            onChange={ () => onChange(task.id) }
          />
          <span
            className="flex-grow-1 text-start ms-3"
          >
            { task.title }
          </span>
          <span>
            { task.tags.map((tag) => (
              <span
                key={ tag.title }
                className="badge mr-2 mb-2 btn btn-outline-dark text-primary"
              >
                { tag.title }
              </span>
            )) }
          </span>
        </div>
        <div
          className="d-flex justify-content-between"
        >
          <span
            className="text-muted align-self-start ps-5"
          >
            { task.description }
          </span>
          <div
            className="me-2"
          >
            <BsFillPencilFill
              onClick={ () => edit(index) }
              className="me-4"
            />
            <BsFillTrash2Fill
              onClick={ () => onDelete(task.id) }
            />
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
);

export default TodoItem;
