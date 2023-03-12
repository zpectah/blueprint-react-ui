import {
    ThemeProps,
    ValidationStateKey,
    STATE_CLASSNAME_PREFIX,
} from '../../../core/src';
import {
    TEXT_INPUT_ROOT_CLASSNAME,
    TEXT_INPUT_BASE_MULTILINE_CLASSNAME,
    TEXT_INPUT_BASE_CLASSNAME,
    TEXT_INPUT_CONTROL_CLASSNAME,
    TEXT_INPUT_ADORNMENT_CLASSNAME,
    TEXT_INPUT_ADORNMENT_START_CLASSNAME,
    TEXT_INPUT_ADORNMENT_END_CLASSNAME,
    TEXT_INPUT_WITH_ADORNMENT_START_CLASSNAME,
    TEXT_INPUT_WITH_ADORNMENT_END_CLASSNAME,
    NUMBER_INPUT_CLASSNAME,
} from './const';

export const getTextInputBaseStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_INPUT_BASE_CLASSNAME} {
                margin: 0;
            }
            
            /* Multiline */
            .${TEXT_INPUT_BASE_MULTILINE_CLASSNAME} {
                margin: 0;
            }            
            
            /* Validation states */
            .${TEXT_INPUT_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${TEXT_INPUT_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${TEXT_INPUT_BASE_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}            
        `;
};

export const getTextInputStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_INPUT_ROOT_CLASSNAME} {
                margin: 0;
            }
            .${TEXT_INPUT_ROOT_CLASSNAME}.${TEXT_INPUT_WITH_ADORNMENT_START_CLASSNAME} {}
            .${TEXT_INPUT_ROOT_CLASSNAME}.${TEXT_INPUT_WITH_ADORNMENT_END_CLASSNAME} {}                        
            
            .${TEXT_INPUT_CONTROL_CLASSNAME} {
                margin: 0;
                display: inline-flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;                
            }            
            
            /* Validation states */
            .${TEXT_INPUT_CONTROL_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.success} {}
            .${TEXT_INPUT_CONTROL_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.warning} {}
            .${TEXT_INPUT_CONTROL_CLASSNAME}.${STATE_CLASSNAME_PREFIX}${ValidationStateKey.error} {}
        `;
};

export const getTextInputAdornmentStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_INPUT_ADORNMENT_CLASSNAME} {}
            .${TEXT_INPUT_ADORNMENT_START_CLASSNAME} {} 
            .${TEXT_INPUT_ADORNMENT_END_CLASSNAME} {}           
        `;
};

export const getNumberInputStyles = (theme: ThemeProps) => {
    return `
            .${NUMBER_INPUT_CLASSNAME} {
                -moz-appearance: textfield;
            }
            .${NUMBER_INPUT_CLASSNAME}::-webkit-outer-spin-button,
            .${NUMBER_INPUT_CLASSNAME}::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }                     
        `;
};
