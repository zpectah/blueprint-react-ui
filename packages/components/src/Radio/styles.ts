import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX, mixin__FieldLabel, mixin__FieldsetGroup, mixin__FieldsetGroupLegend } from '../../../core/src';
import {
    RADIO_ROOT_CLASSNAME,
    RADIO_BASE_CLASSNAME,
    RADIO_GROUP_CLASSNAME,
    RADIO_GROUP_LEGEND_CLASSNAME,
    RADIO_GROUP_BODY_CLASSNAME,
    RADIO_LABEL_CLASSNAME,
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
            
            /* Label */
            .${RADIO_LABEL_CLASSNAME} {
                ${mixin__FieldLabel(theme)}
            }
            /* Label Validation states */
            .${RADIO_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} .${RADIO_LABEL_CLASSNAME} {
                color: ${theme.palette.success.dark};
            }
            .${RADIO_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} .${RADIO_LABEL_CLASSNAME} {
                color: ${theme.palette.warning.dark};
            }
            .${RADIO_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} .${RADIO_LABEL_CLASSNAME} {
                color: ${theme.palette.error.dark};
            }                      
        `;
};

export const getRadioGroupStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_GROUP_CLASSNAME} {
                ${mixin__FieldsetGroup(theme)}
            }
            
            .${RADIO_GROUP_LEGEND_CLASSNAME} {
                ${mixin__FieldsetGroupLegend(theme)}
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
