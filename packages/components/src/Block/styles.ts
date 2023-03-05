import { ThemeProps } from '../../../core/src';
import { BLOCK_ROOT_CLASSNAME } from './const';

const getBlockStyles = (theme: ThemeProps) => {
    return `
            .${BLOCK_ROOT_CLASSNAME} {
                font-family: ${theme.typography.fontFamily.base};
                font-size: 1rem;
                line-height: ${theme.typography.lineHeight.base};
                color: inherit;
            }
        `;
};

export default getBlockStyles;
