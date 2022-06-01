import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  // Provide btn text
  children: ReactNode;

  // variant
  variant: 'primary' | 'secondary';
}

export const Button: FC<Props> = ({
  children,
  variant = 'primary',
  ...props
}) => (
  <button
    {...props}
    style={{
      backgroundColor: variant === 'primary' ? 'blue' : 'gray',
      color: 'white',
      border: 'none',
      borderRadius: 100,
      padding: 15,
      cursor: 'pointer',
    }}
  >
    {children && children}
  </button>
);
