import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX, mixin__FieldsetGroupLegend, mixin__FieldsetGroup } from '../../../core/src';
import { SWITCH_ROOT_CLASSNAME, SWITCH_GROUP_CLASSNAME, SWITCH_GROUP_LEGEND_CLASSNAME, SWITCH_GROUP_BODY_CLASSNAME, SWITCH_BASE_CLASSNAME } from './const';

export const getSwitchBaseStyles = (theme: ThemeProps) => {
    return `
            .${SWITCH_BASE_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${SWITCH_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${SWITCH_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${SWITCH_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};

export const getSwitchStyles = (theme: ThemeProps) => {
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
                ${mixin__FieldsetGroup(theme)}
            }
            
            .${SWITCH_GROUP_LEGEND_CLASSNAME} {
                ${mixin__FieldsetGroupLegend(theme)}
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
