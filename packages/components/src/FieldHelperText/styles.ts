import { ThemeProps, ColorValidationKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { FIELD_HELPER_TEXT_ROOT_CLASSNAME } from './const';

export const getFieldHelperTextStyles = (theme: ThemeProps) => {
    return `
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.success} {
                color: ${theme.palette.success.dark};
            }
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.warning} {
                color: ${theme.palette.warning.dark};
            }
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.error} {
                color: ${theme.palette.error.dark};
            }                                     
        `;
};
