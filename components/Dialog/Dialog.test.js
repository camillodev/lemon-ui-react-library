import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';

describe('Dialog component', () => {
  test('renders open dialog correctly', () => {
    const handleClose = jest.fn();
    const { getByText, getByRole } = render(
      <Dialog isOpen={true} onClose={handleClose}>
        Dialog Content
      </Dialog>
    );

    expect(getByText('Dialog Content')).toBeInTheDocument();

    fireEvent.click(getByRole('button', { name: /close/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('Dialog component overlays entire screen, regardless of parent size', () => {
    const { getByTestId } = render(
      <div style={{ height: '500px' }}>
        <Dialog isOpen={true} onClose={() => {}} />
      </div>
    );

    const overlay = getByTestId('dialog-overlay');
    const dialog = getByTestId('dialog');

    expect(overlay).toHaveStyle(
      'position: fixed; top: 0; left: 0; width: 100%; height: 100%;'
    );
    expect(dialog).toHaveStyle(
      'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'
    );
  });

  test('Dialog has a version where content is not displayed', () => {
    const { queryByTestId } = render(
      <Dialog isOpen={true} onClose={() => {}} hideContent={true} />
    );

    const dialogContent = queryByTestId('dialog-content');
    expect(dialogContent).toBeNull();
  });

  test('Dialog has a version where content is displayed', () => {
    const { getByText } = render(
      <Dialog isOpen={true} onClose={() => {}} hideContent={false}>
        Dialog Content
      </Dialog>
    );

    expect(getByText('Dialog Content')).toBeInTheDocument();
  });

  test('Dialog component controls its visibility based on the isOpen prop and accepts a callback onClose', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Dialog isOpen={true} onClose={handleClose}>
        Dialog Content
      </Dialog>
    );

    expect(getByText('Dialog Content')).toBeInTheDocument();

    fireEvent.click(getByText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('Clicking the X icon closes the dialog', () => {
    const handleClose = jest.fn();
    const { getByLabelText } = render(
      <Dialog isOpen={true} onClose={handleClose}>
        Dialog Content
      </Dialog>
    );

    const closeIcon = getByLabelText('Close');
    fireEvent.click(closeIcon);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('Pressing ESC key closes the dialog', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Dialog isOpen={true} onClose={handleClose}>
        Dialog Content
      </Dialog>
    );

    fireEvent.keyDown(getByTestId('dialog'), { key: 'Escape', code: 'Escape' });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('Clicking on the overlay layer closes the dialog if closeOnOverlayClick prop is true', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Dialog isOpen={true} onClose={handleClose} closeOnOverlayClick={true}>
        Dialog Content
      </Dialog>
    );

    fireEvent.click(getByTestId('overlay'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('Contains the props title, isOpen, onClose, closeOnOverlayClick and children', () => {
    const { getByTestId } = render(
      <Dialog isOpen={true} onClose={() => {}} title='My Dialog'>
        Dialog Content
      </Dialog>
    );

    expect(getByTestId('dialog')).toHaveAttribute('title', 'My Dialog');
    expect(getByTestId('dialog')).toHaveAttribute('isOpen', 'true');
    expect(getByTestId('dialog')).toHaveAttribute(
      'closeonoverlayclick',
      'false'
    );
    expect(getByTestId('dialog')).toHaveTextContent('Dialog Content');
  });

  // Figma
  test('Dialog does not take up the entire screen even when the content exceeds the height', () => {
    const { getByTestId } = render(
      <div style={{ height: '1000px' }}>
        <Dialog isOpen={true} onClose={() => {}}>
          <div style={{ height: '1500px' }}>Dialog Content</div>
        </Dialog>
      </div>
    );

    expect(getByTestId('dialog-content')).toHaveStyle(
      'max-height: calc(100vh - 128px);'
    );
  });
});
