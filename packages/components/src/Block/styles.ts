import { ThemeProps } from '../../../core/src';
import { BLOCK_SCOPE_NAME } from './const';

const getBlockStyles = (theme?: ThemeProps) => {
    return `
            .${BLOCK_SCOPE_NAME} {
                font-family: ${theme?.typography?.fontFamily?.base};
                font-size: 1rem;
                line-height: ${theme?.typography?.lineHeight?.base};
                color: inherit;
            }
        `;
};

export default getBlockStyles;
