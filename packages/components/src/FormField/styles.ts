import { ThemeProps } from '../../../core/src';
import { FORM_FIELD_SCOPE_NAME } from './const';

const getFormFieldStyles = (theme: ThemeProps) => {
    return `
            .${FORM_FIELD_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export default getFormFieldStyles;
