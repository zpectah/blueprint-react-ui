import { ThemeProps } from '../../../core/src';
import { FIELD_HELPER_TEXT_ROOT_CLASSNAME } from './const';

export const getFieldHelperTextStyles = (theme: ThemeProps) => {
    return `
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME}--success {
                color: green;
            }
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME}--warning {
                color: yellow;
            }
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME}--error {
                color: red;
            }                                    
        `;
};
