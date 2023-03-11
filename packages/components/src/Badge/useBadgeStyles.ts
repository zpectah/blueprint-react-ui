import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { BadgeBaseProps } from './types';
import {
    BADGE_SCOPE_NAME,
    BADGE_ROOT_CLASSNAME,
    BADGE_LABEL_CLASSNAME,
    BADGE_ICON_CLASSNAME,
    BADGE_ICON_START_CLASSNAME,
    BADGE_ICON_END_CLASSNAME,
    BADGE_DEFAULT_COLOR,
    BADGE_DEFAULT_SIZE,
} from './const';
import { getBadgeElementStyles } from './styles';

export type UseBadgeStylesProps = Pick<BadgeBaseProps, 'color' | 'size'> & WithStyleProps;
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

export const useBadgeStyles = ({ style, className, color = BADGE_DEFAULT_COLOR, size = BADGE_DEFAULT_SIZE }: UseBadgeStylesProps): UseBadgeStylesReturn => {
    const { theme } = useThemeContext();

    const BUTTON_COLOR_CLASSNAME = `${BADGE_ROOT_CLASSNAME}--${color}`;
    const BUTTON_SIZE_CLASSNAME = size !== BADGE_DEFAULT_SIZE ? `${BADGE_ROOT_CLASSNAME}--${size}` : '';

    const updatedClassName = classNamesFromList([
        BADGE_ROOT_CLASSNAME,
        BUTTON_COLOR_CLASSNAME,
        BUTTON_SIZE_CLASSNAME,
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
