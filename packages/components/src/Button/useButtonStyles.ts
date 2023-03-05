import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { ButtonBaseProps } from './types';
import { LOADING_STATE_CLASSNAME, DISABLED_STATE_CLASSNAME } from '../../../core/src';
import {
    BUTTON_SCOPE_NAME,
    BUTTON_ROOT_CLASSNAME,
    BUTTON_FULLWIDTH_CLASSNAME,
    BUTTON_LABEL_CLASSNAME,
    BUTTON_PRELOADER_CLASSNAME,
    BUTTON_ICON_CLASSNAME,
    BUTTON_ICON_START_CLASSNAME,
    BUTTON_ICON_END_CLASSNAME,
    BUTTON_DEFAULT_COLOR,
    BUTTON_DEFAULT_VARIANT,
    BUTTON_DEFAULT_SIZE,
} from './const';
import getButtonStyles from './styles';

export type UseButtonStylesProps = Pick<ButtonBaseProps, 'color' | 'variant' | 'size' | 'loading' | 'disabled' | 'fullWidth'> & WithStyleProps;
export type UseButtonStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
    preloader: {
        className: WithRequiredStyleProps['className'];
    };
    iconStart: {
        className: WithRequiredStyleProps['className'];
    };
    iconEnd: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useButtonStyles = (props: UseButtonStylesProps): UseButtonStylesReturn => {
    const { style, className, color = BUTTON_DEFAULT_COLOR, variant = BUTTON_DEFAULT_VARIANT, size = BUTTON_DEFAULT_SIZE, loading, disabled, fullWidth } = props;

    const BUTTON_COLOR_CLASSNAME = `${BUTTON_ROOT_CLASSNAME}--${color}`;
    const BUTTON_VARIANT_CLASSNAME = `${BUTTON_ROOT_CLASSNAME}--${variant}`;
    const BUTTON_SIZE_CLASSNAME = size !== BUTTON_DEFAULT_SIZE ? `${BUTTON_ROOT_CLASSNAME}--${size}` : '';

    const { theme } = useThemeContext();

    const updatedRootClassName = classNamesFromList([
        BUTTON_ROOT_CLASSNAME,
        BUTTON_COLOR_CLASSNAME,
        BUTTON_VARIANT_CLASSNAME,
        BUTTON_SIZE_CLASSNAME,
        fullWidth ? BUTTON_FULLWIDTH_CLASSNAME : '',
        loading && LOADING_STATE_CLASSNAME,
        disabled && DISABLED_STATE_CLASSNAME,
        className,
    ]);
    const updatedIconStartClassName = classNamesFromList([
        BUTTON_ICON_CLASSNAME,
        BUTTON_ICON_START_CLASSNAME,
    ]);
    const updatedIconEndClassName = classNamesFromList([
        BUTTON_ICON_CLASSNAME,
        BUTTON_ICON_END_CLASSNAME,
    ]);

    useUniqueStyles({
        id: BUTTON_SCOPE_NAME,
        styles: getButtonStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedRootClassName,
        },
        label: {
            className: BUTTON_LABEL_CLASSNAME,
        },
        preloader: {
            className: BUTTON_PRELOADER_CLASSNAME,
        },
        iconStart: {
            className: updatedIconStartClassName,
        },
        iconEnd: {
            className: updatedIconEndClassName,
        },
    };
};
