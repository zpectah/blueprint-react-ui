import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Container from '../Container';
import { CONTAINER_SCOPE_NAME, CONTAINER_DEFAULT_ELEMENT_TYPE } from '../const';

describe(CONTAINER_SCOPE_NAME, () => {

    it('should check data-test attribute', async () => {
        const dom = render(<Container data-test={CONTAINER_SCOPE_NAME.toLowerCase()} />);
        const element = dom.container.querySelector(CONTAINER_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        await waitFor(() => {
            expect(element).toHaveAttribute('data-test', CONTAINER_SCOPE_NAME.toLowerCase());
        });
    });

    it('should render with default classname', () => {
        const dom = render(<Container />);
        const element = dom.container.querySelector(CONTAINER_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element).toHaveClass(CONTAINER_SCOPE_NAME);
    });

    it('should render with text children', () => {
        const dom = render(<Container>Lorem ipsum dolor sit amet</Container>);
        const element = dom.container.querySelector(CONTAINER_DEFAULT_ELEMENT_TYPE) as HTMLElement;

        expect(element.textContent).toBe('Lorem ipsum dolor sit amet');
    });

});
