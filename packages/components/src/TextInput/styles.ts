import { ThemeProps } from '../../../core/src';
import { TEXT_INPUT_ROOT_CLASSNAME } from './const';

const getTextInputStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_INPUT_ROOT_CLASSNAME} {
                margin: 0;
            }
        `;
};

export default getTextInputStyles;
