import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX, mixin__FieldGroupLabel } from '../../../core/src';
import { SWITCH_ROOT_CLASSNAME, SWITCH_GROUP_CLASSNAME, SWITCH_GROUP_LABEL_CLASSNAME, SWITCH_GROUP_BODY_CLASSNAME } from './const';

export const getSwitchElementStyles = (theme: ThemeProps) => {
    return `
            .${SWITCH_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${SWITCH_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${SWITCH_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${SWITCH_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}             
        `;
};

export const getSwitchGroupStyles = (theme: ThemeProps) => {
    return `
            .${SWITCH_GROUP_CLASSNAME} {
                margin: 0;
            }
            
            .${SWITCH_GROUP_LABEL_CLASSNAME} {
                ${mixin__FieldGroupLabel(theme)}
            }
            
            .${SWITCH_GROUP_BODY_CLASSNAME} {
                margin: 0;
            }                        
            
            /* Validation states */
            .${SWITCH_GROUP_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${SWITCH_GROUP_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${SWITCH_GROUP_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};
