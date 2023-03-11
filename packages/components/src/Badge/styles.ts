import { 
    ThemeProps,
    SizeBaseKey,
    ColorEmotionKey,
} from '../../../core/src';
import {
    BADGE_ROOT_CLASSNAME,
    BADGE_LABEL_CLASSNAME,
    BADGE_ICON_CLASSNAME,
    BADGE_ICON_START_CLASSNAME,
    BADGE_ICON_END_CLASSNAME,
} from './const';

export const getBadgeElementStyles = (theme: ThemeProps) => {
    return `
            .${BADGE_ROOT_CLASSNAME} {
                margin: 0;
            }
            .${BADGE_LABEL_CLASSNAME} {
                margin: 0;
            }
            .${BADGE_ICON_CLASSNAME} {
                margin: 0;
            }
            .${BADGE_ICON_START_CLASSNAME} {
                margin: 0;
            }
            .${BADGE_ICON_END_CLASSNAME} {
                margin: 0;
            }     
            
            /* Size */
            .${BADGE_ROOT_CLASSNAME}--${SizeBaseKey.sm} {
                padding: calc(${theme.spacing.base} / 3.25) calc(${theme.spacing.base} / 2.25);
                font-size: 85%;
            }
            .${BADGE_ROOT_CLASSNAME}--${SizeBaseKey.lg} {
                padding: calc(${theme.spacing.base} / 1.5) ${theme.spacing.base};
                font-size: 105%;
            } 
            
            /* Color: Emotion */
            .${BADGE_ROOT_CLASSNAME}--${ColorEmotionKey.primary} {}
        
            .${BADGE_ROOT_CLASSNAME}--${ColorEmotionKey.secondary} {}                  
        
            .${BADGE_ROOT_CLASSNAME}--${ColorEmotionKey.info} {}  
        
            .${BADGE_ROOT_CLASSNAME}--${ColorEmotionKey.success} {}
        
            .${BADGE_ROOT_CLASSNAME}--${ColorEmotionKey.warning} {}
        
            .${BADGE_ROOT_CLASSNAME}--${ColorEmotionKey.error} {}                       
                                                       
        `;
};
