import { ThemeProps } from '../../../core/src';
import { FIELD_LABEL_SCOPE_NAME } from './const';

const getFieldLabelStyles = (theme: ThemeProps) => {
    return `
            .${FIELD_LABEL_SCOPE_NAME} {
                margin: 0;
            }
            
            .${FIELD_LABEL_SCOPE_NAME}--success {
                color: green;
            }
            .${FIELD_LABEL_SCOPE_NAME}--warning {
                color: yellow;
            }
            .${FIELD_LABEL_SCOPE_NAME}--error {
                color: red;
            }            
            
        `;
};

export default getFieldLabelStyles;
