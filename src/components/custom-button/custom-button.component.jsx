import React from 'react';
import './custom-buttom.styles.scss';

const CustomButton = ({
  children,
  type,
  onClick,
  isGoogleSignIn,
  inverted,
}) => (
  <button
    className={`
      custom-button
      ${isGoogleSignIn ? 'google-sign-in' : ''}
      ${inverted ? 'inverted' : ''}
    `}
    type={type}
    onClick={onClick}
  >
    { children }
  </button>
);

export default CustomButton;
