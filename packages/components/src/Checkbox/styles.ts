import { ThemeProps } from '../../../core/src';
import { CHECKBOX_SCOPE_NAME } from './const';

const getCheckboxElementStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

const getCheckboxStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export { getCheckboxElementStyles, getCheckboxStyles };
