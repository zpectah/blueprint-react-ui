import { ThemeProps } from '../../../core/src';
import { CONTAINER_SCOPE_NAME } from './const';

const getContainerStyles = (theme?: ThemeProps) => {
    return `
            .${CONTAINER_SCOPE_NAME} {
                font-family: ${theme?.typography?.fontFamily?.base};
                font-size: 1rem;
                line-height: ${theme?.typography?.lineHeight?.base};
                color: inherit;
            }
        `;
};

export default getContainerStyles;
