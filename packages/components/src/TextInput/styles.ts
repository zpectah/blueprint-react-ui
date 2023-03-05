import { ThemeProps } from '../../../core/src';
import { TEXT_INPUT_SCOPE_NAME } from './const';

const getTextInputStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_INPUT_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export default getTextInputStyles;
