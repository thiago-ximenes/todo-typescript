import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyTaskProvider from './context/TasksContext/MyTasksProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MyTaskProvider>
      <App />
    </MyTaskProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
