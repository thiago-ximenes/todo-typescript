import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import MyTasksContext from '../../context/TasksContext/MyTasksContext';
import LanguagesSelect from '../header/LanguagesSelect';

const MainHeader = () => {
  const { myLanguage } = useContext(MyTasksContext);

  const date = new Date();

  const options : object = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  const locale = date.toLocaleString(myLanguage, options);

  return (
    <header
      className="justify-content-center align-items-center pt-4"
    >
      <div
        className="d-flex justify-content-between align-items-center"
      >
        <h2>
          <FormattedMessage id="title" />
        </h2>
        <span>
          {locale}
        </span>
        <LanguagesSelect />
      </div>
    </header>
  );
};

export default MainHeader;
