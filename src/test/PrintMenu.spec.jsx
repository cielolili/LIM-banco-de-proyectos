import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import PrintMenu from '../container-Print/PrintMenu';

describe('componente PrintMenu', () => {
  it('Debería pintar el menu con los elementos que hay en el', () => {
    const fnHandleQuery = jest.fn();
    const fnSearch = jest.fn();
    const container = render(<PrintMenu handleQuery={fnHandleQuery} Search={fnSearch} />);
    const sectionMenu = container.getByTestId('menu');
    expect(sectionMenu).toBeTruthy();
    const formSearch = container.getByTestId('formSearch');
    act(() => {
      fireEvent.submit(formSearch, { preventDefault: () => {} });
    });
    expect(sectionMenu).toBeTruthy();
  });
});
