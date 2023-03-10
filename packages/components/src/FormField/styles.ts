import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { FORM_FIELD_ROOT_CLASSNAME, FORM_FIELD_LABEL_CLASSNAME, FORM_FIELD_INPUT_CLASSNAME, FORM_FIELD_MESSAGE_CLASSNAME } from './const';

export const getFormFieldStyles = (theme: ThemeProps) => {
    return `
            .${FORM_FIELD_ROOT_CLASSNAME} {
                margin: 0;
            }
            .${FORM_FIELD_LABEL_CLASSNAME} {
                margin: 0;
            }
            .${FORM_FIELD_INPUT_CLASSNAME} {
                margin: 0;
            }
            .${FORM_FIELD_MESSAGE_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${FORM_FIELD_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${FORM_FIELD_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${FORM_FIELD_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}                                                
        `;
};
