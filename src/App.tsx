import { ToastContainer } from 'react-toastify';
import MainTodo from './pages/MainTodo';

const App = () => (
  <div
    className="container-fluid bg-dark text-white"
  >
    <MainTodo />
    <ToastContainer />
  </div>
);

export default App;
