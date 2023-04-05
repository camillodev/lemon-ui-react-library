import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';
import '@testing-library/jest-dom/extend-expect';

describe('Dialog component', () => {
  test('renders open dialog correctly', () => {
    const { getByTestId } = render(
      <Dialog isOpen={true} onClose={() => {}} title='Test Dialog'>
        Test content
      </Dialog>
    );
    expect(getByTestId('dialog-overlay')).toBeInTheDocument();
  });

  test('Dialog has a version where children is not displayed', () => {
    const { queryByTestId } = render(
      <Dialog isOpen={true} onClose={() => {}} title='Test Dialog' />
    );
    expect(queryByTestId('dialog-content')).not.toBeInTheDocument();
  });

  test('Dialog has a version where content is displayed', () => {
    const { getByText, queryByTestId } = render(
      <Dialog
        isOpen={true}
        onClose={() => {}}
        title='Test Dialog'
        hideChildren={false}>
        Test content
      </Dialog>
    );
    expect(getByText('Test content')).toBeInTheDocument();
    expect(queryByTestId('dialog-content')).toBeInTheDocument();
  });

  test('Dialog component controls its visibility based on the isOpen prop and accepts a callback onClose', () => {
    const { queryByTestId } = render(
      <Dialog isOpen={false} title='Test Dialog'>
        Test content
      </Dialog>
    );

    expect(queryByTestId('dialog')).not.toBeInTheDocument();

    const handleClose = jest.fn();
    const { getByRole } = render(
      <Dialog isOpen={true} onClose={handleClose} title='Test Dialog'>
        Test content
      </Dialog>
    );
    const closeButton = getByRole('button', { name: 'close dialog' });
    expect(handleClose).not.toBeCalled();
    fireEvent.click(closeButton);
    expect(handleClose).toBeCalledTimes(1);
  });

  test('Clicking the X icon closes the dialog', () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <Dialog isOpen={true} onClose={handleClose} title='Test Dialog'>
        Test content
      </Dialog>
    );
    fireEvent.click(getByLabelText('close dialog'));
    expect(handleClose).toBeCalledTimes(1);
  });

  test('Pressing ESC key closes the dialog', () => {
    const handleClose = jest.fn();
    render(
      <Dialog isOpen={true} onClose={handleClose} title='Test Dialog'>
        Test content
      </Dialog>
    );
    fireEvent.keyDown(document, { keyCode: 27 });
    expect(handleClose).toBeCalledTimes(1);
  });

  test('Clicking on the overlay layer closes the dialog if closeOnOverlayClick prop is true', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Dialog
        isOpen={true}
        onClose={handleClose}
        title='Test Dialog'
        closeOnOverlayClick={true}>
        Test content
      </Dialog>
    );
    fireEvent.click(getByTestId('dialog-overlay'));
    expect(handleClose).toBeCalledTimes(1);
  });

  test('Dialog can not be closed by clicking on the overlay when closeOnOverlayClick is false', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Dialog isOpen={true} onClose={handleClose} title='Test Dialog'>
        Test content
      </Dialog>
    );

    const dialogOverlay = getByTestId('dialog-overlay');
    fireEvent.click(dialogOverlay);

    expect(handleClose).toHaveBeenCalledTimes(0);
  });
});
