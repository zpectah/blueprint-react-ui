import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { RadioElementProps } from './types';
import { RADIO_ELEMENT_SCOPE_NAME, RADIO_ELEMENT_CLASSNAME } from './const';
import { getRadioElementStyles } from './styles';

export type UseRadioElementStylesProps = Pick<RadioElementProps, 'validationState'> & WithStyleProps;
export type UseRadioElementStylesReturn = WithRequiredStyleProps;

export const useRadioElementStyles = ({ style, className, validationState }: UseRadioElementStylesProps): UseRadioElementStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = validationState ? `${STATE_CLASSNAME_PREFIX}${validationState}` : '';

    const updatedClassName = classNamesFromList([
        RADIO_ELEMENT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
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
