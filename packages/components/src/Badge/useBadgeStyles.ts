import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import {
    BADGE_SCOPE_NAME,
    BADGE_ROOT_CLASSNAME,
    BADGE_LABEL_CLASSNAME,
    BADGE_ICON_CLASSNAME,
    BADGE_ICON_START_CLASSNAME,
    BADGE_ICON_END_CLASSNAME,
} from './const';
import { getBadgeElementStyles } from './styles';

export type UseBadgeStylesProps = WithStyleProps;
export type UseBadgeStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
    iconStart: {
        className: WithRequiredStyleProps['className'];
    };
    iconEnd: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useBadgeStyles = ({ style, className }: UseBadgeStylesProps): UseBadgeStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        BADGE_ROOT_CLASSNAME,
        className,
    ]);
    const updatedIconStartClassName = classNamesFromList([
        BADGE_ICON_CLASSNAME,
        BADGE_ICON_START_CLASSNAME,
    ]);
    const updatedIconEndClassName = classNamesFromList([
        BADGE_ICON_CLASSNAME,
        BADGE_ICON_END_CLASSNAME,
    ]);

    useUniqueStyles({
        id: BADGE_SCOPE_NAME,
        styles: getBadgeElementStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        label: {
            className: BADGE_LABEL_CLASSNAME,
        },
        iconStart: {
            className: updatedIconStartClassName,
        },
        iconEnd: {
            className: updatedIconEndClassName,
        },
    };
};
