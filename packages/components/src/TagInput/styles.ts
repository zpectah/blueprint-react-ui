import { ThemeProps } from '../../../core/src';
import { TAG_INPUT_ROOT_CLASSNAME } from './const';

const getSelectStyles = (theme: ThemeProps) => {
    return `
            .${TAG_INPUT_ROOT_CLASSNAME} {
                margin: 0;
            }
        `;
};

export default getSelectStyles;
