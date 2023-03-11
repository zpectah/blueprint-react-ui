import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { TEXT_INPUT_ROOT_CLASSNAME, TEXT_INPUT_ELEMENT_MULTILINE_CLASSNAME, TEXT_INPUT_ELEMENT_CLASSNAME } from './const';

export const getTextInputElementStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_INPUT_ELEMENT_CLASSNAME} {
                margin: 0;
            }
            
            /* Multiline */
            .${TEXT_INPUT_ELEMENT_MULTILINE_CLASSNAME} {
                margin: 0;
            }            
            
            /* Validation states */
            .${TEXT_INPUT_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${TEXT_INPUT_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${TEXT_INPUT_ELEMENT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};

export const getTextInputStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_INPUT_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${TEXT_INPUT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${TEXT_INPUT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${TEXT_INPUT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};
