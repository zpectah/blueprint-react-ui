import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Block from '../Block';
import { BLOCK_SCOPE_NAME, BLOCK_DEFAULT_ELEMENT_TYPE } from '../const';

describe(BLOCK_SCOPE_NAME, () => {

    it('should check data-test attribute', async () => {
        const dom = render(<Block data-test={BLOCK_SCOPE_NAME.toLowerCase()} />);
        const element = dom.container.querySelector(BLOCK_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        await waitFor(() => {
            expect(element).toHaveAttribute('data-test', BLOCK_SCOPE_NAME.toLowerCase());
        });
    });

    it('should render with default classname', () => {
        const dom = render(<Block />);
        const element = dom.container.querySelector(BLOCK_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element).toHaveClass(BLOCK_SCOPE_NAME);
    });

    it('should render with text children', () => {
        const dom = render(<Block>Lorem ipsum dolor sit amet</Block>);
        const element = dom.container.querySelector(BLOCK_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element.textContent).toBe('Lorem ipsum dolor sit amet');
    });

});
