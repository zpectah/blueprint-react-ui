import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Text from '../Text';
import { TEXT_SCOPE_NAME, TEXT_DEFAULT_ELEMENT_TYPE } from '../const';

describe(TEXT_SCOPE_NAME, () => {

    it('should check data-test attribute', async () => {
        const dom = render(<Text data-test={TEXT_SCOPE_NAME.toLowerCase()} />);
        const element = dom.container.querySelector(TEXT_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        await waitFor(() => {
            expect(element).toHaveAttribute('data-test', TEXT_SCOPE_NAME.toLowerCase());
        });
    });

    it('should render with default classname', () => {
        const dom = render(<Text />);
        const element = dom.container.querySelector(TEXT_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element).toHaveClass(TEXT_SCOPE_NAME);
    });

    it('should render with text children', () => {
        const dom = render(<Text>Lorem ipsum dolor sit amet</Text>);
        const element = dom.container.querySelector(TEXT_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element.textContent).toBe('Lorem ipsum dolor sit amet');
    });

});
