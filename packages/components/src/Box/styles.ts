import { ThemeProps } from '../../../core/src';
import { BOX_SCOPE_NAME } from './const';

const getBoxStyles = (theme?: ThemeProps) => {
    return `
            .${BOX_SCOPE_NAME} {
                font-family: ${theme?.typography?.fontFamily?.base};
                font-size: 1rem;
                line-height: ${theme?.typography?.lineHeight?.base};
                color: inherit;
            }
        `;
};

export default getBoxStyles;
