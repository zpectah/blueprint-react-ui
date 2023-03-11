import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { RADIO_ELEMENT_SCOPE_NAME, RADIO_ELEMENT_CLASSNAME } from './const';
import { getRadioElementStyles } from './styles';

export type UseRadioElementStylesProps = WithValidationState & WithStyleProps;
export type UseRadioElementStylesReturn = WithRequiredStyleProps;

export const useRadioElementStyles = ({ style, className, validationState }: UseRadioElementStylesProps): UseRadioElementStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        RADIO_ELEMENT_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: RADIO_ELEMENT_SCOPE_NAME,
        styles: getRadioElementStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
