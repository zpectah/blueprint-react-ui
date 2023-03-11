import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { RadioBaseProps } from './types';
import { RADIO_SCOPE_NAME, RADIO_ROOT_CLASSNAME, RADIO_LABEL_CLASSNAME } from './const';
import { getRadioStyles } from './styles';

export type UseRadioStylesProps = Pick<RadioBaseProps, 'validationState'> & WithStyleProps;
export type UseRadioStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useRadioStyles = ({ style, className, validationState }: UseRadioStylesProps): UseRadioStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = validationState ? `${STATE_CLASSNAME_PREFIX}${validationState}` : '';

    const updatedClassName = classNamesFromList([
        RADIO_ROOT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
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
