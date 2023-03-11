import { ThemeProps, ColorValidationKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { TEXT_AREA_ROOT_CLASSNAME } from './const';

export const getTextAreaStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_AREA_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${TEXT_AREA_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.success} {}
            .${TEXT_AREA_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.warning} {}
            .${TEXT_AREA_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ColorValidationKey.error} {}             
        `;
};
