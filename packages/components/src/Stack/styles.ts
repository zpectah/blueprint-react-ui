import { ThemeProps } from '../../../core/src';
import { STACK_SCOPE_NAME } from './const';

const getStackStyles = (theme?: ThemeProps) => {
    return `
            .${STACK_SCOPE_NAME} {
                font-family: ${theme?.typography?.fontFamily?.base};
                font-size: 1rem;
                line-height: ${theme?.typography?.lineHeight?.base};
                color: inherit;
            }
        `;
};

export default getStackStyles;
