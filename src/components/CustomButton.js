import React from 'react';

export const CustomButton = (
  {size, type, border = false, sx = {}, children, ...otherprops}
) => {
  return (
    <button
      type='button'
      style={{
        backgroundColor: '#0243eb',
        color: 'white',
        borderRadius: '5px',
        border: 'unset',
        padding: '10px 20px',
        textAlign: 'center',
        cursor: 'pointer',
        ...(size == 'large' && {
          fontSize: '12pt',
          fontWeight: 'bold'
        }),
        ...(size == 'normal' && {
          fontSize: '10pt'
        }),
        ...(size == 'small' && {
          fontSize: '9pt'
        }),
        ...(type == 'primary' && {
          backgroundColor: '#0243eb',
        }),
        ...(type == 'error' && {
          backgroundColor: '#dc262b',
        }),
        ...(type == 'warning' && {
          backgroundColor: '#f3a618',
        }),
        ...(border && {
          border: '0.5 solid #0243eb'
        }),
        sx,
      }}
      {...otherprops}
    >{children}</button>
  );
};