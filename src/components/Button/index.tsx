import React from 'react';
import PropTypes from 'prop-types';

type Prop = {
  text: string,
  onClick: () => void,
}

function Button({ text, onClick }: Prop) {
  return (
    <button type='button' onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;