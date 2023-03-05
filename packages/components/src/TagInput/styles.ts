import { ThemeProps } from '../../../core/src';
import { TAG_INPUT_SCOPE_NAME } from './const';

const getSelectStyles = (theme: ThemeProps) => {
    return `
            .${TAG_INPUT_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export default getSelectStyles;
