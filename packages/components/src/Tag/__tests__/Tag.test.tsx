import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Tag from '../Tag';
import { TAG_SCOPE_NAME, TAG_DEFAULT_ELEMENT_TYPE } from '../const';

describe(TAG_SCOPE_NAME, () => {

    it('should check data-test attribute', async () => {
        const dom = render(<Tag elementProps={{ 'data-test': TAG_SCOPE_NAME.toLowerCase() }} />);
        const element = dom.container.querySelector(TAG_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        await waitFor(() => {
            expect(element).toHaveAttribute('data-test', TAG_SCOPE_NAME.toLowerCase());
        });
    });

    it('should render with default classname', () => {
        const dom = render(<Tag />);
        const element = dom.container.querySelector(TAG_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element).toHaveClass(TAG_SCOPE_NAME);
    });

    it('should render with text children', () => {
        const dom = render(<Tag>Lorem ipsum dolor sit amet</Tag>);
        const element = dom.container.querySelector(TAG_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element.textContent).toBe('Lorem ipsum dolor sit amet');
    });

});
