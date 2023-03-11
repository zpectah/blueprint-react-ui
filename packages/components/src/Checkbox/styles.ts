import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX, mixin__FieldGroupLabel } from '../../../core/src';
import {
    CHECKBOX_ROOT_CLASSNAME,
    CHECKBOX_BASE_CLASSNAME,
    CHECKBOX_GROUP_CLASSNAME,
    CHECKBOX_GROUP_LABEL_CLASSNAME,
    CHECKBOX_GROUP_BODY_CLASSNAME,
    CHECKBOX_LABEL_CLASSNAME,
} from './const';

export const getCheckboxBaseStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_BASE_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${CHECKBOX_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${CHECKBOX_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${CHECKBOX_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};

export const getCheckboxStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            /* Label */
            .${CHECKBOX_LABEL_CLASSNAME} {
                ${mixin__FieldGroupLabel(theme)}
            }   
            /* Label Validation states */
            .${CHECKBOX_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} .${CHECKBOX_LABEL_CLASSNAME} {
                color: ${theme.palette.success.dark};
            }
            .${CHECKBOX_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} .${CHECKBOX_LABEL_CLASSNAME} {
                color: ${theme.palette.warning.dark};
            }
            .${CHECKBOX_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} .${CHECKBOX_LABEL_CLASSNAME} {
                color: ${theme.palette.error.dark};
            }                    
        `;
};

export const getCheckboxGroupStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_GROUP_CLASSNAME} {
                margin: 0;
            }
            
            .${CHECKBOX_GROUP_LABEL_CLASSNAME} {
                ${mixin__FieldGroupLabel(theme)}
            }
            
            .${CHECKBOX_GROUP_BODY_CLASSNAME} {
                margin: 0;
            }                        
            
            /* Validation states */
            .${CHECKBOX_GROUP_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${CHECKBOX_GROUP_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${CHECKBOX_GROUP_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};
