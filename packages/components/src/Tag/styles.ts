import { ThemeProps } from '../../../core/src';
import { TAG_SCOPE_NAME } from './const';

const getTagStyles = (theme?: ThemeProps) => {
    return `
            .${TAG_SCOPE_NAME} {
                font-family: ${theme?.typography?.fontFamily?.base};
                font-size: 1rem;
                line-height: ${theme?.typography?.lineHeight?.base};
                color: inherit;
            }
        `;
};

export default getTagStyles;
