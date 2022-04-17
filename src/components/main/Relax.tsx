import { FormattedMessage } from 'react-intl';

const Relax : React.FC = () => (
  <div
    className="d-flex justify-content-around align-items-center mt-5
      fst-italic"
  >
    <h2>
      <FormattedMessage id="relax.title1" />
      <br />
      <FormattedMessage id="relax.title2" />
    </h2>
    <img
      style={ {
        width: '30em',
      } }
      className=" rounded-3"
      src="https://c.tenor.com/UIOAoI_h-XsAAAAd/sleep-tom-and-jerry.gif"
      alt="Relaxing with TOM"
    />
  </div>
);

export default Relax;
