import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX, getFieldGroupLabelMixin } from '../../../core/src';
import {
    RADIO_ROOT_CLASSNAME,
    RADIO_BASE_CLASSNAME,
    RADIO_GROUP_CLASSNAME,
    RADIO_GROUP_LABEL_CLASSNAME,
    RADIO_GROUP_BODY_CLASSNAME,
} from './const';

export const getRadioBaseStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_BASE_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${RADIO_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${RADIO_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${RADIO_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}             
        `;
};

export const getRadioStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_ROOT_CLASSNAME} {
                margin: 0;
            }
            .${RADIO_ROOT_CLASSNAME}-label {
                ${getFieldGroupLabelMixin(theme)}
            }
            
            /* Validation states */
            .${RADIO_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${RADIO_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${RADIO_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}                      
        `;
};

export const getRadioGroupStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_GROUP_CLASSNAME} {
                margin: 0;
            }
            
            .${RADIO_GROUP_LABEL_CLASSNAME} {
                ${getFieldGroupLabelMixin(theme)}
            }
            
            .${RADIO_GROUP_BODY_CLASSNAME} {
                margin: 0;
            }                        
            
            /* Validation states */
            .${RADIO_GROUP_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${RADIO_GROUP_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${RADIO_GROUP_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};
