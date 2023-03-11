import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { CheckboxBaseProps } from './types';
import { CHECKBOX_SCOPE_NAME, CHECKBOX_ROOT_CLASSNAME, CHECKBOX_LABEL_CLASSNAME } from './const';
import { getCheckboxStyles } from './styles';

export type UseCheckboxStylesProps = Pick<CheckboxBaseProps, 'validationState'> & WithStyleProps;
export type UseCheckboxStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useCheckboxStyles = ({ style, className, validationState }: UseCheckboxStylesProps): UseCheckboxStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = validationState ? `${STATE_CLASSNAME_PREFIX}${validationState}` : '';

    const updatedClassName = classNamesFromList([
        CHECKBOX_ROOT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
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
