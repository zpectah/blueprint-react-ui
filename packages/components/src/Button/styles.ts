import { ThemeProps, LOADING_STATE_CLASSNAME, DISABLED_STATE_CLASSNAME } from '../../../core/src';
import {
    BUTTON_SCOPE_NAME,
    BUTTON_FULLWIDTH_CLASSNAME,
    BUTTON_LABEL_CLASSNAME,
    BUTTON_PRELOADER_CLASSNAME,
    BUTTON_ICON_CLASSNAME,
    BUTTON_ICON_START_CLASSNAME,
    BUTTON_ICON_END_CLASSNAME,
} from './const';

const getButtonStyles = (theme: ThemeProps) => {
    return `
        .${BUTTON_SCOPE_NAME} {
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
        
        .${BUTTON_SCOPE_NAME}:is(button) {}
        .${BUTTON_SCOPE_NAME}:is(a) {
            text-decoration: none;
        }
        
        .${BUTTON_SCOPE_NAME}.${BUTTON_FULLWIDTH_CLASSNAME} {
            width: 100%;
        } 
        .${BUTTON_SCOPE_NAME}.${LOADING_STATE_CLASSNAME} {
            position: relative;
            overflow: hidden;
        }
        .${BUTTON_SCOPE_NAME}.${DISABLED_STATE_CLASSNAME} {
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
        .${BUTTON_SCOPE_NAME}--sm {
            padding: calc(${theme.spacing.base} / 3.25) calc(${theme.spacing.base} / 2.25);
            font-size: 85%;
        }
        .${BUTTON_SCOPE_NAME}--lg {
            padding: calc(${theme.spacing.base} / 1.5) ${theme.spacing.base};
            font-size: 105%;
        }
            
        /* Variant */
        .${BUTTON_SCOPE_NAME}--contained {}
        .${BUTTON_SCOPE_NAME}--outlined {}
        .${BUTTON_SCOPE_NAME}--text {}      
        
        /* Color */
        .${BUTTON_SCOPE_NAME}--primary {}
        .${BUTTON_SCOPE_NAME}--primary:hover {}
        .${BUTTON_SCOPE_NAME}--primary:active {}
        .${BUTTON_SCOPE_NAME}--primary:focus {}
    
        .${BUTTON_SCOPE_NAME}--secondary {}
        .${BUTTON_SCOPE_NAME}--secondary:hover {}
        .${BUTTON_SCOPE_NAME}--secondary:active {}
        .${BUTTON_SCOPE_NAME}--secondary:focus {}                    
    
        .${BUTTON_SCOPE_NAME}--info {}
        .${BUTTON_SCOPE_NAME}--info:hover {}
        .${BUTTON_SCOPE_NAME}--info:active {}
        .${BUTTON_SCOPE_NAME}--info:focus {}   
    
        .${BUTTON_SCOPE_NAME}--success {}
        .${BUTTON_SCOPE_NAME}--success:hover {}
        .${BUTTON_SCOPE_NAME}--success:active {}
        .${BUTTON_SCOPE_NAME}--success:focus {}
    
        .${BUTTON_SCOPE_NAME}--warning {}
        .${BUTTON_SCOPE_NAME}--warning:hover {}
        .${BUTTON_SCOPE_NAME}--warning:active {}
        .${BUTTON_SCOPE_NAME}--warning:focus {}
    
        .${BUTTON_SCOPE_NAME}--error {}
        .${BUTTON_SCOPE_NAME}--error:hover {}
        .${BUTTON_SCOPE_NAME}--error:active {}
        .${BUTTON_SCOPE_NAME}--error:focus {}                      
    `;
};

export default getButtonStyles;
