import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { SELECT_ROOT_CLASSNAME, OPTION_ITEM_SCOPE_NAME, OPTION_GROUP_SCOPE_NAME, SELECT_BASE_CLASSNAME } from './const';

export const getSelectBaseStyles = (theme: ThemeProps) => {
    return `
            .${SELECT_BASE_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${SELECT_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${SELECT_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${SELECT_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};

export const getSelectStyles = (theme: ThemeProps) => {
    return `
            .${SELECT_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${SELECT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${SELECT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${SELECT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};

export const getOptionItemStyles = (theme: ThemeProps) => {
    return `
            .${OPTION_ITEM_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export const getOptionGroupStyles = (theme: ThemeProps) => {
    return `
            .${OPTION_GROUP_SCOPE_NAME} {
                margin: 0;
            }
        `;
};
