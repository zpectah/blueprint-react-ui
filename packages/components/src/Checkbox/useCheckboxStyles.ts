import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { CHECKBOX_SCOPE_NAME, CHECKBOX_ROOT_CLASSNAME, CHECKBOX_LABEL_CLASSNAME } from './const';
import { getCheckboxStyles } from './styles';

export type UseCheckboxStylesProps = WithStyleProps;
export type UseCheckboxStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useCheckboxStyles = ({ style, className }: UseCheckboxStylesProps): UseCheckboxStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        CHECKBOX_ROOT_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: CHECKBOX_SCOPE_NAME,
        styles: getCheckboxStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        label: {
            className: CHECKBOX_LABEL_CLASSNAME,
        },
    };
};
