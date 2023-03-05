import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, DISABLED_STATE_CLASSNAME } from '../../../core/src';
import { TagProps } from './types';
import {
    TAG_SCOPE_NAME,
    TAG_ROOT_CLASSNAME,
    TAG_LABEL_CLASSNAME,
    TAG_ACTION_CLASSNAME,
    TAG_CLICKABLE_CLASSNAME,
    TAG_DISMISSIBLE_CLASSNAME,
    TAG_DEFAULT_COLOR,
    TAG_DEFAULT_VARIANT,
    TAG_DEFAULT_SIZE,
} from './const';
import { getTagStyles } from './styles';

export type UseTagStylesProps = Pick<TagProps, 'onClick' | 'onDismiss' | 'color' | 'variant' | 'size' | 'disabled'> & WithStyleProps;
export type UseTagStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
    action: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useTagStyles = (props: UseTagStylesProps): UseTagStylesReturn => {
    const {
        style,
        className,
        onClick,
        onDismiss,
        color = TAG_DEFAULT_COLOR,
        variant = TAG_DEFAULT_VARIANT,
        size = TAG_DEFAULT_SIZE,
        disabled,
    } = props;

    const TAG_COLOR_CLASSNAME = `${TAG_ROOT_CLASSNAME}--${color}`;
    const TAG_VARIANT_CLASSNAME = `${TAG_ROOT_CLASSNAME}--${variant}`;
    const TAG_SIZE_CLASSNAME = size !== TAG_DEFAULT_SIZE ? `${TAG_ROOT_CLASSNAME}--${size}` : '';

    const { theme } = useThemeContext();

    const updatedRootClassName = classNamesFromList([
        TAG_ROOT_CLASSNAME,
        TAG_COLOR_CLASSNAME,
        TAG_VARIANT_CLASSNAME,
        TAG_SIZE_CLASSNAME,
        disabled && DISABLED_STATE_CLASSNAME,
        onClick && TAG_CLICKABLE_CLASSNAME,
        onDismiss && TAG_DISMISSIBLE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: TAG_SCOPE_NAME,
        styles: getTagStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedRootClassName,
        },
        label: {
            className: TAG_LABEL_CLASSNAME,
        },
        action: {
            className: TAG_ACTION_CLASSNAME,
        },
    };
};
