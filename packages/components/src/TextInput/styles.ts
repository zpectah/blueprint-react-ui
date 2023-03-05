import { ThemeProps } from '../../../core/src';
import { TEXT_INPUT_ROOT_CLASSNAME } from './const';

export const getTextInputStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_INPUT_ROOT_CLASSNAME} {
                margin: 0;
            }
        `;
};
