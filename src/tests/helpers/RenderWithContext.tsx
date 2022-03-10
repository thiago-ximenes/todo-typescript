import { render } from '@testing-library/react';
import MyContext from '../../context/TasksContext/MyTasksContext';
import { MyTasksContext } from '../../context/TasksContext/types';

const renderWithContext = (
  component : JSX.Element,
  { contextProps, ...context } : { contextProps : MyTasksContext },
) => ({
  ...render(
    <MyContext.Provider
      value={ contextProps }
    >
      {component}
    </MyContext.Provider>,
  ),
  context,
});

export default renderWithContext;
