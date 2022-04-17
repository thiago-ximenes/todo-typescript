import LanguagesSelect from '../header/LanguagesSelect';

const MainHeader = () => {
  const date = new Date();

  const options : object = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  const locale = date.toLocaleString('pt-BR', options);

  return (
    <header
      className="justify-content-center align-items-center pt-4"
    >
      <div
        className="d-flex justify-content-between align-items-center"
      >
        <h2>
          Tarefas do dia
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
