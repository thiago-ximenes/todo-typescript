import { ToastContainer } from 'react-toastify';
import MainTodo from './pages/MainTodo';
import LocalizationProvider from './translate/languageProvider';

const App = () => (
  <div
    className="container-fluid bg-dark text-white"
  >
    <LocalizationProvider>
      <MainTodo />
      <ToastContainer />
    </LocalizationProvider>
  </div>
);

export default App;
