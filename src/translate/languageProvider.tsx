import React, { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import MyContext from '../context/TasksContext/MyTasksContext';
import english from './en-US';
import portuguese from './pt-BR';
import spanish from './es-ES';

const localesFiles = {
  'en-US': english,
  'pt-BR': portuguese,
  'es-ES': spanish,
};

const LocalizationProvider: React.FC = ({ children }) => {
  const { myLanguage } = useContext(MyContext);

  return (
    <IntlProvider
      locale={ localesFiles[myLanguage as keyof typeof localesFiles].locale }
      messages={ localesFiles[myLanguage as keyof typeof localesFiles]
        .messages }
    >
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
