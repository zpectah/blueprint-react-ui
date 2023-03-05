import { ThemeProps } from '../../../core/src';
import { BOX_ROOT_CLASSNAME } from './const';

const getBoxStyles = (theme: ThemeProps) => {
    return `
            .${BOX_ROOT_CLASSNAME} {
                font-family: ${theme.typography.fontFamily.base};
                font-size: 1rem;
                line-height: ${theme.typography.lineHeight.base};
                color: inherit;
            }
        `;
};

export default getBoxStyles;
