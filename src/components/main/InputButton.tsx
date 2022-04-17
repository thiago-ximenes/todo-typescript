import React from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

type InputButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const InputButton = ({ onClick }: InputButtonProps) => (
  <button
    className="btn btn-outline-secondary d-flex mx-auto
      justify-content-center align-items-center fw-bold fs-4"
    type="button"
    onClick={ onClick }
  >
    <FormattedMessage id="input.add.button.name" />
    <div
      className="ms-2 d-flex align-items-center text-danger"
    >
      <BsPlusCircleDotted />
    </div>
  </button>
);

export default InputButton;
