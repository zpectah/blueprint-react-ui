import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { TagProps } from './types';
import {
    TAG_SCOPE_NAME,
    TAG_LABEL_CLASSNAME,
    TAG_ACTION_CLASSNAME,
    TAG_CLICKABLE_CLASSNAME,
    TAG_DISMISSIBLE_CLASSNAME,
} from './const';
import getTagStyles from './styles';

export type UseTagStylesProps = Pick<TagProps, 'onClick' | 'onDismiss'> & WithStyleProps;
export type UseTagStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
    action: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useTagStyles = ({ style, className, onClick, onDismiss }: UseTagStylesProps): UseTagStylesReturn => {
    const { theme } = useThemeContext();

    const updatedRootClassName = classNamesFromList([
        TAG_SCOPE_NAME,
        className,
        onClick && TAG_CLICKABLE_CLASSNAME,
        onDismiss && TAG_DISMISSIBLE_CLASSNAME,
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
