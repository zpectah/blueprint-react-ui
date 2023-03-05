import { ThemeProps, LOADING_STATE_CLASSNAME, DISABLED_STATE_CLASSNAME } from '../../../core/src';
import {
    BUTTON_ROOT_CLASSNAME,
    BUTTON_FULLWIDTH_CLASSNAME,
    BUTTON_LABEL_CLASSNAME,
    BUTTON_PRELOADER_CLASSNAME,
    BUTTON_ICON_CLASSNAME,
    BUTTON_ICON_START_CLASSNAME,
    BUTTON_ICON_END_CLASSNAME,
} from './const';

export const getButtonStyles = (theme: ThemeProps) => {
    return `
        .${BUTTON_ROOT_CLASSNAME} {
            width: auto;
            height: auto;
            margin: 0;
            padding: calc(${theme.spacing.base} / 2) calc(${theme.spacing.base} / 1.5);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            background: none;
            color: ${theme.palette.text.primary};
            border: 1px solid ${theme.palette.primary.base};
            border-radius: calc(${theme.shape.radius} * 0.075rem);
            font-family: ${theme.typography.fontFamily.base};
            font-size: 1rem;
            line-height: ${theme.typography.lineHeight.base};
            cursor: pointer;            
        }
        
        .${BUTTON_ROOT_CLASSNAME}:is(button) {}
        .${BUTTON_ROOT_CLASSNAME}:is(a) {
            text-decoration: none;
        }
        
        .${BUTTON_ROOT_CLASSNAME}.${BUTTON_FULLWIDTH_CLASSNAME} {
            width: 100%;
        } 
        .${BUTTON_ROOT_CLASSNAME}.${LOADING_STATE_CLASSNAME} {
            position: relative;
            overflow: hidden;
        }
        .${BUTTON_ROOT_CLASSNAME}.${DISABLED_STATE_CLASSNAME} {
            cursor: not-allowed;
        }                
    
        /* Label */
        .${BUTTON_LABEL_CLASSNAME} {}
                
        /* Preloader */ 
        .${BUTTON_PRELOADER_CLASSNAME} {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            background-color: rgba(250,250,250, .75);
        }
    
        /* Icon */
        .${BUTTON_ICON_CLASSNAME} {}
        .${BUTTON_ICON_START_CLASSNAME} {}
        .${BUTTON_ICON_END_CLASSNAME} {}
    
        /* Size */
        .${BUTTON_ROOT_CLASSNAME}--sm {
            padding: calc(${theme.spacing.base} / 3.25) calc(${theme.spacing.base} / 2.25);
            font-size: 85%;
        }
        .${BUTTON_ROOT_CLASSNAME}--lg {
            padding: calc(${theme.spacing.base} / 1.5) ${theme.spacing.base};
            font-size: 105%;
        }
            
        /* Variant */
        .${BUTTON_ROOT_CLASSNAME}--contained {}
        .${BUTTON_ROOT_CLASSNAME}--outlined {}
        .${BUTTON_ROOT_CLASSNAME}--text {}      
        
        /* Color */
        .${BUTTON_ROOT_CLASSNAME}--primary {}
        .${BUTTON_ROOT_CLASSNAME}--primary:hover {}
        .${BUTTON_ROOT_CLASSNAME}--primary:active {}
        .${BUTTON_ROOT_CLASSNAME}--primary:focus {}
    
        .${BUTTON_ROOT_CLASSNAME}--secondary {}
        .${BUTTON_ROOT_CLASSNAME}--secondary:hover {}
        .${BUTTON_ROOT_CLASSNAME}--secondary:active {}
        .${BUTTON_ROOT_CLASSNAME}--secondary:focus {}                    
    
        .${BUTTON_ROOT_CLASSNAME}--info {}
        .${BUTTON_ROOT_CLASSNAME}--info:hover {}
        .${BUTTON_ROOT_CLASSNAME}--info:active {}
        .${BUTTON_ROOT_CLASSNAME}--info:focus {}   
    
        .${BUTTON_ROOT_CLASSNAME}--success {}
        .${BUTTON_ROOT_CLASSNAME}--success:hover {}
        .${BUTTON_ROOT_CLASSNAME}--success:active {}
        .${BUTTON_ROOT_CLASSNAME}--success:focus {}
    
        .${BUTTON_ROOT_CLASSNAME}--warning {}
        .${BUTTON_ROOT_CLASSNAME}--warning:hover {}
        .${BUTTON_ROOT_CLASSNAME}--warning:active {}
        .${BUTTON_ROOT_CLASSNAME}--warning:focus {}
    
        .${BUTTON_ROOT_CLASSNAME}--error {}
        .${BUTTON_ROOT_CLASSNAME}--error:hover {}
        .${BUTTON_ROOT_CLASSNAME}--error:active {}
        .${BUTTON_ROOT_CLASSNAME}--error:focus {}                      
    `;
};
