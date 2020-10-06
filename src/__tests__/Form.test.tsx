import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Main from '../pages/Main';

describe('Form test', () => {
  it('should be able to validate if input is empty', () => {
    const { getByTestId } = render(<Main />);

    expect(getByTestId('input-user')).toBeEmptyDOMElement();
  });
});

describe('Form test', () => {
  it('should be able to validate if input is receiving values', () => {
    const { getByTestId, getByPlaceholderText } = render(<Main />);

    fireEvent.change(getByPlaceholderText('Digite o nome do usuário'), {
      target: { value: 'novo2p' },
    });

    fireEvent.submit(getByTestId('user-form'));

    expect(getByTestId('input-user')).toHaveValue();
  });
});
