import React from 'react';

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
    { buttonName }
  </button>
);

export default ActionButton;
