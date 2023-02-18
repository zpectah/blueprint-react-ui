import { useClassName, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { ButtonBaseProps } from './types';
import { LOADING_STATE_CLASSNAME, DISABLED_STATE_CLASSNAME } from '../../../core/src';
import {
    BUTTON_SCOPE_NAME,
    BUTTON_FULLWIDTH_CLASSNAME,
    BUTTON_TEXT_CLASSNAME,
    BUTTON_PRELOADER_CLASSNAME,
    BUTTON_ICON_CLASSNAME,
    BUTTON_ICON_BEFORE_CLASSNAME,
    BUTTON_ICON_AFTER_CLASSNAME,
} from './const';
import getButtonStyles from './styles';

export type UseButtonStylesProps = Pick<ButtonBaseProps, 'color' | 'variant' | 'size' | 'loading' | 'disabled' | 'fullWidth'> & WithStyleProps;
export type UseButtonStylesReturn = {
    root: WithRequiredStyleProps;
    text: {
        className: WithRequiredStyleProps['className'];
    };
    preloader: {
        className: WithRequiredStyleProps['className'];
    };
    iconBefore: {
        className: WithRequiredStyleProps['className'];
    };
    iconAfter: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useButtonStyles = (props: UseButtonStylesProps): UseButtonStylesReturn => {
    const { style, className, color, variant, size, loading, disabled, fullWidth } = props;

    const BUTTON_COLOR_CLASSNAME = `${BUTTON_SCOPE_NAME}--${color}`;
    const BUTTON_VARIANT_CLASSNAME = `${BUTTON_SCOPE_NAME}--${variant}`;
    const BUTTON_SIZE_CLASSNAME = size !== 'md' ? `${BUTTON_SCOPE_NAME}--${size}` : '';

    const { theme } = useThemeContext();

    const { className: updatedRootClassName } = useClassName({
        className: BUTTON_SCOPE_NAME,
        classes: [
            BUTTON_COLOR_CLASSNAME,
            BUTTON_VARIANT_CLASSNAME,
            BUTTON_SIZE_CLASSNAME,
            fullWidth ? BUTTON_FULLWIDTH_CLASSNAME : '',
            loading && LOADING_STATE_CLASSNAME,
            disabled && DISABLED_STATE_CLASSNAME,
            className,
        ],
    });
    const { className: updatedIconBeforeClassName } = useClassName({
        classes: [
            BUTTON_ICON_CLASSNAME,
            BUTTON_ICON_BEFORE_CLASSNAME,
        ],
    });
    const { className: updatedIconAfterClassName } = useClassName({
        classes: [
            BUTTON_ICON_CLASSNAME,
            BUTTON_ICON_AFTER_CLASSNAME,
        ],
    });

    useUniqueStyles({
        id: BUTTON_SCOPE_NAME,
        styles: getButtonStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedRootClassName,
        },
        text: {
            className: BUTTON_TEXT_CLASSNAME,
        },
        preloader: {
            className: BUTTON_PRELOADER_CLASSNAME,
        },
        iconBefore: {
            className: updatedIconBeforeClassName,
        },
        iconAfter: {
            className: updatedIconAfterClassName,
        },
    };
};
