import { ThemeProps, ValidationStateKey, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { TEXT_AREA_ROOT_CLASSNAME } from './const';

export const getTextAreaStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_AREA_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            /* Validation states */
            .${TEXT_AREA_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${TEXT_AREA_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${TEXT_AREA_ROOT_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}             
        `;
};
