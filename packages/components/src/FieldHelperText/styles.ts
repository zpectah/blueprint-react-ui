import { ThemeProps } from '../../../core/src';
import { FIELD_HELPER_TEXT_SCOPE_NAME } from './const';

const getFieldHelperTextStyles = (theme: ThemeProps) => {
    return `
            .${FIELD_HELPER_TEXT_SCOPE_NAME} {
                margin: 0;
            }
            
            .${FIELD_HELPER_TEXT_SCOPE_NAME}--success {
                color: green;
            }
            .${FIELD_HELPER_TEXT_SCOPE_NAME}--warning {
                color: yellow;
            }
            .${FIELD_HELPER_TEXT_SCOPE_NAME}--error {
                color: red;
            }                                    
        `;
};

export default getFieldHelperTextStyles;
