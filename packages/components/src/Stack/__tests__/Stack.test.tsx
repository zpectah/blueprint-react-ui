import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Stack from '../Stack';
import { STACK_SCOPE_NAME, STACK_DEFAULT_ELEMENT_TYPE } from '../const';

describe(STACK_SCOPE_NAME, () => {

    it('should check data-test attribute', async () => {
        const dom = render(<Stack data-test={STACK_SCOPE_NAME.toLowerCase()} />);
        const element = dom.container.querySelector(STACK_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        await waitFor(() => {
            expect(element).toHaveAttribute('data-test', STACK_SCOPE_NAME.toLowerCase());
        });
    });

    it('should render with default classname', () => {
        const dom = render(<Stack />);
        const element = dom.container.querySelector(STACK_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element).toHaveClass(STACK_SCOPE_NAME);
    });

    it('should render with text children', () => {
        const dom = render(<Stack>Lorem ipsum dolor sit amet</Stack>);
        const element = dom.container.querySelector(STACK_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element.textContent).toBe('Lorem ipsum dolor sit amet');
    });

});
