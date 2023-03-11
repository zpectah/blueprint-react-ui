import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { RADIO_SCOPE_NAME, RADIO_ROOT_CLASSNAME, RADIO_LABEL_CLASSNAME } from './const';
import { getRadioStyles } from './styles';

export type UseRadioStylesProps = WithValidationState & WithStyleProps;
export type UseRadioStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useRadioStyles = ({ style, className, validationState }: UseRadioStylesProps): UseRadioStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        RADIO_ROOT_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: RADIO_SCOPE_NAME,
        styles: getRadioStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        label: {
            className: RADIO_LABEL_CLASSNAME,
        },
    };
};
