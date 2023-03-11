import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { CHECKBOX_ROOT_CLASSNAME, CHECKBOX_ELEMENT_CLASSNAME } from './const';

export const getCheckboxElementStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_ELEMENT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${CHECKBOX_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${CHECKBOX_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${CHECKBOX_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};

export const getCheckboxStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_ROOT_CLASSNAME} {
                margin: 0;
            }
            .${CHECKBOX_ROOT_CLASSNAME}-label {
                margin: 0;
            }   
            
            /* Validation states */
            .${CHECKBOX_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${CHECKBOX_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${CHECKBOX_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}                      
        `;
};
