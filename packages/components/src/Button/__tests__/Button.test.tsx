import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Button from '../Button';
import { BUTTON_SCOPE_NAME, BUTTON_DEFAULT_ELEMENT_TYPE } from '../const';

describe(BUTTON_SCOPE_NAME, () => {

    it('should check data-test attribute', async () => {
        const dom = render(<Button data-test={BUTTON_SCOPE_NAME.toLowerCase()} />);
        const element = dom.container.querySelector(BUTTON_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        await waitFor(() => {
            expect(element).toHaveAttribute('data-test', BUTTON_SCOPE_NAME.toLowerCase());
        });
    });

    it('should render with default classname', () => {
        const dom = render(<Button />);
        const element = dom.container.querySelector(BUTTON_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element).toHaveClass(BUTTON_SCOPE_NAME);
    });

    it('should render with text children', () => {
        const dom = render(<Button>Lorem ipsum dolor sit amet</Button>);
        const element = dom.container.querySelector(BUTTON_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element.textContent).toBe('Lorem ipsum dolor sit amet');
    });

});
