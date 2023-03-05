import { ThemeProps } from '../../../core/src';
import { FIELD_LABEL_SCOPE_NAME } from './const';

const getFieldLabelStyles = (theme: ThemeProps) => {
    return `
            .${FIELD_LABEL_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export default getFieldLabelStyles;
