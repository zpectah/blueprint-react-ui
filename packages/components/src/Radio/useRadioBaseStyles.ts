import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { RADIO_BASE_SCOPE_NAME, RADIO_BASE_CLASSNAME } from './const';
import { getRadioBaseStyles } from './styles';

export type UseRadioBaseStylesProps = WithValidationState & WithStyleProps;
export type UseRadioBaseStylesReturn = WithRequiredStyleProps;

export const useRadioBaseStyles = ({ style, className, validationState }: UseRadioBaseStylesProps): UseRadioBaseStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        RADIO_BASE_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: RADIO_BASE_SCOPE_NAME,
        styles: getRadioBaseStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
