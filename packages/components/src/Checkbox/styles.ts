import { ThemeProps, ColorValidationKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { CHECKBOX_ROOT_CLASSNAME, CHECKBOX_ELEMENT_CLASSNAME } from './const';

export const getCheckboxElementStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_ELEMENT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${CHECKBOX_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.success} {}
            .${CHECKBOX_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.warning} {}
            .${CHECKBOX_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.error} {}            
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
            .${CHECKBOX_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.success} {}
            .${CHECKBOX_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.warning} {}
            .${CHECKBOX_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.error} {}                      
        `;
};
