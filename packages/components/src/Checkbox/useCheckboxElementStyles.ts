import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { CheckboxElementProps } from './types';
import { CHECKBOX_ELEMENT_SCOPE_NAME, CHECKBOX_ELEMENT_CLASSNAME } from './const';
import { getCheckboxElementStyles } from './styles';

export type UseCheckboxElementStylesProps = Pick<CheckboxElementProps, 'validationState'> & WithStyleProps;
export type UseCheckboxElementStylesReturn = WithRequiredStyleProps;

export const useCheckboxElementStyles = ({ style, className, validationState }: UseCheckboxElementStylesProps): UseCheckboxElementStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = validationState ? `${STATE_CLASSNAME_PREFIX}${validationState}` : '';

    const updatedClassName = classNamesFromList([
        CHECKBOX_ELEMENT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: CHECKBOX_ELEMENT_SCOPE_NAME,
        styles: getCheckboxElementStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
