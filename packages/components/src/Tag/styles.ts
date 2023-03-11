import { 
    ThemeProps,
    SizeMinimalKey,
    TagShapeVariantKeys,
    ColorEmotionKey,
    DISABLED_STATE_CLASSNAME,
} from '../../../core/src';
import {
    TAG_ROOT_CLASSNAME,
    TAG_LABEL_CLASSNAME,
    TAG_ACTION_CLASSNAME,
    TAG_CLICKABLE_CLASSNAME,
    TAG_DISMISSIBLE_CLASSNAME,
} from './const';

export const getTagStyles = (theme: ThemeProps) => {
    return `
            .${TAG_ROOT_CLASSNAME} {
                font-family: ${theme.typography.fontFamily.base};
                font-size: 1rem;
                line-height: ${theme.typography.lineHeight.base};
                color: inherit;
                display: inline-flex;
            }
            .${TAG_CLICKABLE_CLASSNAME} {
                cursor: pointer;
            }
            .${TAG_DISMISSIBLE_CLASSNAME} {}            

            .${TAG_ROOT_CLASSNAME}.${DISABLED_STATE_CLASSNAME} {
                cursor: not-allowed;
            } 
            
            /* Label */
            .${TAG_LABEL_CLASSNAME} {}
            
            /* Action */
            .${TAG_ACTION_CLASSNAME} {
                cursor: pointer;
            }
            
            /* Size */
            .${TAG_ROOT_CLASSNAME}--${SizeMinimalKey.sm} {}
            .${TAG_ROOT_CLASSNAME}--${SizeMinimalKey.lg} {}
                
            /* Variant */
            .${TAG_ROOT_CLASSNAME}--${TagShapeVariantKeys.filled} {}
            .${TAG_ROOT_CLASSNAME}--${TagShapeVariantKeys.outlined} {}
            
            /* Color: Emotion */
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.primary} {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.primary}:hover {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.primary}:active {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.primary}:focus {}
        
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.secondary} {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.secondary}:hover {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.secondary}:active {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.secondary}:focus {}                    
        
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.info} {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.info}:hover {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.info}:active {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.info}:focus {}   
        
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.success} {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.success}:hover {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.success}:active {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.success}:focus {}
        
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.warning} {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.warning}:hover {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.warning}:active {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.warning}:focus {}
        
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.error} {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.error}:hover {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.error}:active {}
            .${TAG_ROOT_CLASSNAME}--${ColorEmotionKey.error}:focus {}
            
        `;
};
