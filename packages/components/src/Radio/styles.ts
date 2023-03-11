import { ThemeProps, ColorValidationKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { RADIO_ROOT_CLASSNAME, RADIO_ELEMENT_CLASSNAME } from './const';

export const getRadioElementStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_ELEMENT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${RADIO_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.success} {}
            .${RADIO_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.warning} {}
            .${RADIO_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.error} {}             
        `;
};

export const getRadioStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_ROOT_CLASSNAME} {
                margin: 0;
            }
            .${RADIO_ROOT_CLASSNAME}-label {
                margin: 0;
            }
            
            /* Validation states */
            .${RADIO_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.success} {}
            .${RADIO_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.warning} {}
            .${RADIO_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.error} {}                      
        `;
};
