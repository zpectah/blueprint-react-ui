import '@testing-library/jest-dom';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Badge from '../Badge';
import { BADGE_SCOPE_NAME, BADGE_ROOT_CLASSNAME } from '../const';

describe(BADGE_SCOPE_NAME, () => {

    it('should check data-test attribute', async () => {
        const dom = render(<Badge data-test={BADGE_SCOPE_NAME.toLowerCase()} />);
        const element = dom.container.querySelector('div') as HTMLElement;

        await waitFor(() => {
            expect(element).toHaveAttribute('data-test', BADGE_SCOPE_NAME.toLowerCase());
        });
    });

    it('should render with default classname', () => {
        const dom = render(<Badge />);
        const element = dom.container.querySelector('div') as HTMLElement;

        expect(element).toHaveClass(BADGE_ROOT_CLASSNAME);
    });

    it('should render with text children', () => {
        const dom = render(<Badge label="Lorem ipsum dolor sit amet" />);
        const element = dom.container.querySelector('div') as HTMLElement;

        expect(element.textContent).toBe('Lorem ipsum dolor sit amet');
    });

});
