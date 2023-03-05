import { ThemeProps } from '../../../core/src';
import { SELECT_SCOPE_NAME } from './const';

const getSelectStyles = (theme: ThemeProps) => {
    return `
            .${SELECT_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export default getSelectStyles;
