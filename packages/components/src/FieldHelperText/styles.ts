import { ThemeProps, ColorValidationKey } from '../../../core/src';
import { FIELD_HELPER_TEXT_ROOT_CLASSNAME } from './const';

export const getFieldHelperTextStyles = (theme: ThemeProps) => {
    return `
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME}--${ColorValidationKey['success']} {
                color: ${theme.palette.success.dark};
            }
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME}--${ColorValidationKey['warning']} {
                color: ${theme.palette.warning.dark};
            }
            .${FIELD_HELPER_TEXT_ROOT_CLASSNAME}--${ColorValidationKey['error']} {
                color: ${theme.palette.error.dark};
            }                                     
        `;
};
