import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { myTasksContextDefaultValue as contextProps } from '../context/TasksContext/MyTasksContext';
import MainTodo from '../pages/MainTodo';
import RenderWithContext from './helpers/RenderWithContext';

describe('Should render the gif at the corrects moments.', () => {
  it('Render when the task array is empty', () => {
    RenderWithContext(<MainTodo />, { contextProps });

    expect(screen.getByAltText('Relaxing with TOM')).toBeInTheDocument();
  });
  it('Will not render when the "Adicionar', () => {
    contextProps.inputTaskOn = true;
    RenderWithContext(<MainTodo />, { contextProps });

    expect(screen.queryByAltText('Relaxing with TOM')).not.toBeInTheDocument();
  });
});
