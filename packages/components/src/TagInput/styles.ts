import { ThemeProps, ColorValidationKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { TAG_INPUT_ROOT_CLASSNAME } from './const';

export const getTagInputStyles = (theme: ThemeProps) => {
    return `
            .${TAG_INPUT_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${TAG_INPUT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.success} {}
            .${TAG_INPUT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.warning} {}
            .${TAG_INPUT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.error} {}            
        `;
};
