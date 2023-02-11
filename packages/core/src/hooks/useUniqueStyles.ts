import { useEffect } from 'react';

export interface UseUniqueStylesProps {
    id: string;
    styles: string;
    target?: HTMLElement | null;
    disableIdPrefix?: boolean;
}

export const useUniqueStyles = ({ id, styles, target = document.querySelector('head'), disableIdPrefix }: UseUniqueStylesProps): void => {
    const scopePrefix = 'BlueprintUI--';
    const scopeId = !disableIdPrefix ? `${scopePrefix}${id}` : id;

    const getCurrentStyles = () => target && target.querySelector(`#${scopeId}`);
    const appendStyles = () => {
        const currentStyles = getCurrentStyles();

        if (target && !currentStyles) {
            target.insertAdjacentHTML(
                'beforeend',
                `<style id="${scopeId}">${styles}</style>`,
            )
        }
    };
    const destroyStyles = () => {
        const currentStyles = getCurrentStyles();

        if (currentStyles) currentStyles.remove();
    };

    useEffect(() => {
        appendStyles();

        return () => destroyStyles();
    }, []);
};
