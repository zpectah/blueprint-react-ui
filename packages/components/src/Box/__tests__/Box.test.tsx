import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Box from '../Box';
import { BOX_SCOPE_NAME, BOX_DEFAULT_ELEMENT_TYPE } from '../const';

describe(BOX_SCOPE_NAME, () => {

    it('should check data-test attribute', async () => {
        const dom = render(<Box data-test={BOX_SCOPE_NAME.toLowerCase()} />);
        const element = dom.container.querySelector(BOX_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        await waitFor(() => {
            expect(element).toHaveAttribute('data-test', BOX_SCOPE_NAME.toLowerCase());
        });
    });

    it('should render with default classname', () => {
        const dom = render(<Box />);
        const element = dom.container.querySelector(BOX_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element).toHaveClass(BOX_SCOPE_NAME);
    });

    it('should render with text children', () => {
        const dom = render(<Box>Lorem ipsum dolor sit amet</Box>);
        const element = dom.container.querySelector(BOX_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element.textContent).toBe('Lorem ipsum dolor sit amet');
    });

});
