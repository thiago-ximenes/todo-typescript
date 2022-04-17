import React, { useContext, useState } from 'react';
import Brazil from '../../assets/icon-flag-brazil.svg';
import SPAIN from '../../assets/icon-flag-spain.svg';
import USA from '../../assets/icon-flag-usa.svg';
import MyContext from '../../context/TasksContext/MyTasksContext';

interface Language {
  'pt-BR': string;
  'en-US': string;
  'es-ES': string;
}

const LanguagesSelect: React.FC = () => {
  const { myLanguage, setMyLanguage } = useContext(MyContext);

  const [selectIsOn, setSelectOn] = useState<boolean>(false);

  const languages: Language = {
    'pt-BR': Brazil,
    'en-US': USA,
    'es-ES': SPAIN,
  };

  function setLanguage(language: string): void {
    setMyLanguage(language);
    setSelectOn(false);
  }

  return (
    <header
      className="d-flex flex-column justify-content-between align-items-center"
    >
      <button
        type="button"
        className="btn btn-outline-dark align-self-end"
        onClick={ () => setSelectOn(!selectIsOn) }
      >
        <img
          style={ {
            width: '2.5rem',
          } }
          src={ languages[myLanguage as keyof typeof languages] }
          alt={ Object.keys(languages).toString() }
        />
      </button>
      {selectIsOn && (
      <div
        className="position-absolute "
      >
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={ () => setLanguage('pt-BR') }
        >
          <img
            src={ languages['pt-BR'] }
            alt="pt-BR"
          />
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={ () => setLanguage('en-US') }
        >
          <img
            src={ languages['en-US'] }
            alt="en-US"
          />
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={ () => setLanguage('es-ES') }
        >
          <img
            style={ {
              width: '2.5rem',
            } }
            src={ SPAIN }
            alt="es-ES"
          />
        </button>
      </div>
      )}
    </header>
  );
};

export default LanguagesSelect;
