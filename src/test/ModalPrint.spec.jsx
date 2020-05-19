import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ModalPrint from '../container-Print/ModalPrint';

describe('component ModalPrint', () => {
  it('Debería mostar el modal al darle click a la imagem', () => {
    const fnImg = jest.fn();
    const fnDescription = jest.fn();
    const fnProfileUser = jest.fn();
    const fnName = jest.fn();
    const fnLikes = jest.fn();
    const fnDownload = jest.fn();
    const container = render(<ModalPrint
      img={fnImg}
      profileUser={fnProfileUser}
      description={fnDescription}
      name={fnName}
      likes={fnLikes}
      download={fnDownload}
    />);
    const input = container.getByTestId('input');
    const modal = container.getByTestId('modal');
    act(() => {
      fireEvent.click(input);
    });
    expect(modal).toBeTruthy();
  });
});
