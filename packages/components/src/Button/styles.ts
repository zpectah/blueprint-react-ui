import {
    ThemeProps,
    SizeBaseKey,
    ButtonShapeVariantKeys,
    ColorEmotionKey,
    LOADING_STATE_CLASSNAME,
    DISABLED_STATE_CLASSNAME,
} from '../../../core/src';
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
        .${BUTTON_ROOT_CLASSNAME}--${SizeBaseKey.sm} {
            padding: calc(${theme.spacing.base} / 3.25) calc(${theme.spacing.base} / 2.25);
            font-size: 85%;
        }
        .${BUTTON_ROOT_CLASSNAME}--${SizeBaseKey.lg} {
            padding: calc(${theme.spacing.base} / 1.5) ${theme.spacing.base};
            font-size: 105%;
        }
            
        /* Variant */
        .${BUTTON_ROOT_CLASSNAME}--${ButtonShapeVariantKeys.contained} {}
        .${BUTTON_ROOT_CLASSNAME}--${ButtonShapeVariantKeys.outlined} {}
        .${BUTTON_ROOT_CLASSNAME}--${ButtonShapeVariantKeys.text} {}      
        
        /* Color: Emotion */
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.primary} {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.primary}:hover {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.primary}:active {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.primary}:focus {}
    
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.secondary} {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.secondary}:hover {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.secondary}:active {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.secondary}:focus {}                    
    
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.info} {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.info}:hover {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.info}:active {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.info}:focus {}   
    
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.success} {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.success}:hover {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.success}:active {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.success}:focus {}
    
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.warning} {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.warning}:hover {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.warning}:active {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.warning}:focus {}
    
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.error} {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.error}:hover {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.error}:active {}
        .${BUTTON_ROOT_CLASSNAME}--${ColorEmotionKey.error}:focus {}                      
    `;
};
