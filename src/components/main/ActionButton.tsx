import React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  buttonName: string
  isDisabled: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ActionButton = ({ buttonName, isDisabled, onClick }: Props) => (
  <button
    onClick={ onClick }
    disabled={ isDisabled }
    className="btn btn-danger me-3"
    type="button"
  >
    <FormattedMessage id={ buttonName } />
  </button>
);

export default ActionButton;
