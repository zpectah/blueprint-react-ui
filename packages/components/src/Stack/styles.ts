import { ThemeProps } from '../../../core/src';
import { STACK_ROOT_CLASSNAME } from './const';

export const getStackStyles = (theme: ThemeProps) => {
    return `
            .${STACK_ROOT_CLASSNAME} {
                font-family: ${theme.typography.fontFamily.base};
                font-size: 1rem;
                line-height: ${theme.typography.lineHeight.base};
                color: inherit;
            }
        `;
};
