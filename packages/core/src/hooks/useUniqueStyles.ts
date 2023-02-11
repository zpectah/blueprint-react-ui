import { useEffect } from 'react';

export interface UseUniqueStylesProps {
    id: string;
    styles: string;
    target?: HTMLElement | null;
    disableIdPrefix?: boolean;
    disableScopeAttr?: boolean;
    scope?: string;
}

export const useUniqueStyles = (props: UseUniqueStylesProps): void => {
    const { id, styles, target = document.querySelector('head'), disableIdPrefix, disableScopeAttr, scope = 'Blueprint-UI' } = props;

    const idPrefix = 'BPUI__';
    const scopeId = !disableIdPrefix ? `${idPrefix}${id}` : id;

    const getCurrentStyles = () => target && target.querySelector(`#${scopeId}`);
    const appendStyles = () => {
        const currentStyles = getCurrentStyles();
        const scopeDataAttr = !disableScopeAttr ? `data-scope="${scope}"` : '';

        if (target && !currentStyles) {
            target.insertAdjacentHTML(
                'beforeend',
                `<style ${scopeDataAttr} id="${scopeId}">${styles}</style>`,
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
