import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { SWITCH_ROOT_CLASSNAME } from './const';

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
